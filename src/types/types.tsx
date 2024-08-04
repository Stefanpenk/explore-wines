export type WineDetailsType = {
  vintage: {
    id: string;
    name: string;
    statistics: { ratings_average: number; ratings_count: number };
    image: { variations: { bottle_small: string } };
    wine: {
      winery: { name: string };
      name: string;
      region: { name: string; country: string };
      type_id: number;
    };
  };
  price: {
    amount: number;
    currency: string;
  };
};

export interface WineTypeContextType {
  wines: WineDetailsType[] | null;
  loading: boolean;
  error: string | null;
}

export interface ApiResponse {
  matches: WineDetailsType[];
}
