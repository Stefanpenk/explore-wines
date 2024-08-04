import { useContext, useState } from "react";

import Slider from "@mui/material/Slider";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { WineContext } from "../../context/wines.context";

import PriceRangeSCSS from "./FilterPriceRange.module.scss";

export const FilterPriceRange = () => {
  const [value, setValue] = useState<number[]>([100, 300]);
  const { setRange } = useContext(WineContext);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    setValue(newValue);
  };

  const handleRange = (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    setRange(newValue);
  };

  return (
    <div className={PriceRangeSCSS.container}>
      <h2>Price Range</h2>
      <div>
        <Slider
          getAriaLabel={() => "Minimum distance"}
          min={0}
          max={2000}
          value={value}
          onChange={handleChange}
          onChangeCommitted={handleRange}
          valueLabelDisplay="auto"
          step={10}
          disableSwap
          sx={{
            color: "#ba1628",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{value[0]}$</Typography>
          <Typography variant="h6">{value[1]}$</Typography>
        </Box>
      </div>
    </div>
  );
};
