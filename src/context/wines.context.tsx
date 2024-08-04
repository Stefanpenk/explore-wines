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
});

export const WineProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wines, setWines] = useState<WineDetailsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [countriesParams, setCountriesParams] = useState<string[]>([]);
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

    const url = `https://corsproxy.io/?${encodeURIComponent(
      `https://api.vivino.com/v/9.1.0/vintages/_explore?limit=10&country_code=us&min_critics_score=1${queryCountriesString}`
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
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [countriesParams]);

  const value = {
    wines,
    error,
    loading,
    handleCountriesParams,
  };

  return <WineContext.Provider value={value}>{children}</WineContext.Provider>;
};
