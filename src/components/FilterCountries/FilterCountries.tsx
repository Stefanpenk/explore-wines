import { useContext, useState } from "react";

import { CountriesButtonParams } from "../../utils/params";

import { WineContext } from "../../context/wines.context";

import ButtonRed from "../ButtonRed/ButtonRed";

import FilterCountriesSCSS from "./FilterCountries.module.scss";
import RedButtonSCSS from "../ButtonRed/ButtonRed.module.scss";

const FilterCountries = () => {
  const { handleCountriesParams } = useContext(WineContext);
  const [toggledArray, setToggledArray] = useState<boolean[]>(
    new Array(CountriesButtonParams.length).fill(false)
  );

  return (
    <div className={FilterCountriesSCSS.container}>
      <div>
        <h2 className={FilterCountriesSCSS.header}>Countries</h2>
      </div>
      <div className={FilterCountriesSCSS.buttonContainer}>
        {CountriesButtonParams.map((button, index: number) => {
          const { children, buttonLabel } = button;

          const buttonClasses = `${RedButtonSCSS.buttonContainer} ${
            RedButtonSCSS.redButton
          } ${toggledArray[index] ? RedButtonSCSS.clicked : ""}`;

          const handleClick = (index: number) => {
            const newToggledArray = toggledArray.map((toggled, i) =>
              i === index ? !toggled : toggled
            );
            setToggledArray(newToggledArray);
            handleCountriesParams(buttonLabel);
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

export default FilterCountries;
