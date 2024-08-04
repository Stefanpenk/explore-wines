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
});

export const WineProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wines, setWines] = useState<WineDetailsType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const url = `https://corsproxy.io/?${encodeURIComponent(
    `https://api.vivino.com/v/9.1.0/vintages/_explore?limit=10&country_code=us&min_critics_score=1`
  )}`;

  useEffect(() => {
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
  }, []);

  const value = {
    wines,
    error,
    loading,
  };

  return <WineContext.Provider value={value}>{children}</WineContext.Provider>;
};
