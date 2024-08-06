import { useState, createContext, useEffect, ReactNode, useRef } from "react";
import {
  ApiResponse,
  WineDetailsType,
  WineTypeContextType,
} from "../types/types";

export const WineContext = createContext<WineTypeContextType>({
  wines: null,
  loading: true,
  error: null,
  handleCountriesParams: () => {},
  handleWineTypeParams: () => {},
  handleRegionParams: () => {},
  setRange: () => {},
});

export const WineProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wines, setWines] = useState<WineDetailsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countriesParams, setCountriesParams] = useState<string[]>([]);
  const [wineTypeParams, setWineTypeParams] = useState<string[]>([]);
  const [regionParams, setRegionParams] = useState<string[]>([]);
  const [range, setRange] = useState<number[]>([100, 300]);
  const abortControllerRef = useRef<AbortController | null>(null);

  const handleCountriesParams = (country: string) => {
    setCountriesParams((prev) => {
      if (prev.includes(country)) {
        return prev.filter((item) => item !== country);
      } else {
        return [...prev, country];
      }
    });
  };

  const handleWineTypeParams = (wineType: string) => {
    setWineTypeParams((prevWineType) => {
      if (prevWineType.includes(wineType)) {
        return prevWineType.filter((type) => type !== wineType);
      } else {
        return [...prevWineType, wineType];
      }
    });
  };

  const handleRegionParams = (region: string) => {
    setRegionParams((prev) => {
      if (prev.includes(region)) {
        return prev.filter((item) => item !== region);
      } else {
        return [...prev, region];
      }
    });
  };

  useEffect(() => {
    const CountriesUrl = () => {
      if (countriesParams.length > 0) {
        return countriesParams
          .map((param) => `&wine_origin_countries[]=${param}`)
          .join("");
      } else {
        return "";
      }
    };
    const queryCountriesString = CountriesUrl();

    const wineTypeUrl = () => {
      if (wineTypeParams.length > 0) {
        return wineTypeParams
          .map((param) => `&wine_type_ids[]=${param}`)
          .join("");
      } else {
        return "";
      }
    };
    const queryTypeString = wineTypeUrl();

    const regionUrl = () => {
      if (regionParams.length > 0) {
        return regionParams.map((param) => `&region_ids[]=${param}`).join("");
      } else {
        return "";
      }
    };
    const queryRegionString = regionUrl();

    const priceRangeUrl = `&price_range_min=${range[0]}&price_range_max=${range[1]}`;

    const url = `https://corsproxy.io/?${encodeURIComponent(
      `https://api.vivino.com/v/9.1.0/vintages/_explore?limit=10&country_code=us&min_critics_score=1${queryCountriesString}${queryTypeString}${queryRegionString}${priceRangeUrl}`
    )}`;

    const fetchData = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: abortControllerRef.current?.signal,
        });
        const result: ApiResponse = await response.json();
        setWines(result.matches);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === "AbortError") {
            console.log("Aborted");
            return;
          }
          setError("An unknown error occurred");
        } else {
          setError("An unexpected non-error object was thrown");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countriesParams, wineTypeParams, regionParams, range]);

  const value = {
    wines,
    error,
    loading,
    handleCountriesParams,
    handleWineTypeParams,
    handleRegionParams,
    setRange,
  };

  return <WineContext.Provider value={value}>{children}</WineContext.Provider>;
};
