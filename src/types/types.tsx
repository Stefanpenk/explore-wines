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
  handleCountriesParams: (item: string) => void;
  handleWineTypeParams: (item: string) => void;
  handleRegionParams: (item: string) => void;
  setRange: (item: number[]) => void;
}

export interface ApiResponse {
  matches: WineDetailsType[];
}

export type fallbackWineImgProp = {
  winery: {
    name: string;
  };
  name: string;
  region: {
    name: string;
    country: string;
  };
  type_id: number;
};

export type WineDetailsTypeProps = {
  singleWine: WineDetailsType;
};

export type ButtonProps = {
  children: string;
  buttonLabel: string;
  buttonClasses: string;
  handleClick: () => void;
};

export type ButtonParamsProps = {
  children: string;
  buttonLabel: string;
};

export interface Currency {
  code: string;
  name: string;
  prefix: string | null;
  suffix: string | null;
}
