import { useContext, useState } from "react";
import { RegionsButtonParams } from "../../utils/params";

import { WineContext } from "../../context/wines.context";

import ButtonRed from "../ButtonRed/ButtonRed";

import ButtonsSCSS from "../ButtonRed/ButtonRed.module.scss";
import RegionSCSS from "./FilterRegions.module.scss";

const FilterRegions = () => {
  const { handleRegionParams } = useContext(WineContext);
  const [toggledArray, setToggledArray] = useState<boolean[]>(
    new Array(RegionsButtonParams.length).fill(false)
  );

  return (
    <div className={RegionSCSS.container}>
      <div>
        <h2 className={RegionSCSS.header}>Regions</h2>
      </div>
      <div className={RegionSCSS.buttonContainer}>
        {RegionsButtonParams.map((button, index: number) => {
          const { children, buttonLabel } = button;

          const buttonClasses = `${ButtonsSCSS.buttonContainer} ${
            ButtonsSCSS.redButton
          } ${toggledArray[index] ? ButtonsSCSS.clicked : ""}`;

          const handleClick = (index: number) => {
            const newToggledArray = toggledArray.map((toggled, i) =>
              i === index ? !toggled : toggled
            );
            setToggledArray(newToggledArray);
            console.log("clicked", index);
            handleRegionParams(buttonLabel);
          };
          return (
            <ButtonRed
              key={buttonLabel}
              children={children}
              buttonLabel={buttonLabel}
              handleClick={() => handleClick(index)}
              buttonClasses={buttonClasses}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilterRegions;
