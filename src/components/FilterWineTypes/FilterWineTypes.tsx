import { useContext, useState } from "react";
import { WineContext } from "../../context/wines.context";

import { wineTypesButtonParams } from "../../utils/params";

import ButtonRed from "../ButtonRed/ButtonRed";

import FilterWineTypeSCSS from "./FilterWineTypes.module.scss";
import ButtonsSCSS from "../ButtonRed/ButtonRed.module.scss";

const FilterWineTypes = () => {
  const { handleWineTypeParams } = useContext(WineContext);
  const [toggledArray, setToggledArray] = useState<boolean[]>(
    new Array(wineTypesButtonParams.length).fill(false)
  );

  return (
    <div className={FilterWineTypeSCSS.container}>
      <div>
        <h2 className={FilterWineTypeSCSS.header}>Wine Types</h2>
      </div>
      <div className={FilterWineTypeSCSS.buttonContainer}>
        {wineTypesButtonParams.map((button, index: number) => {
          const { children, buttonLabel } = button;
          const buttonClasses = `${ButtonsSCSS.buttonContainer} ${
            ButtonsSCSS.redButton
          } ${toggledArray[index] ? ButtonsSCSS.clicked : ""}`;
          const handleClick = (index: number) => {
            const newToggledArray = toggledArray.map((toggled, i) =>
              i === index ? !toggled : toggled
            );
            setToggledArray(newToggledArray);
            handleWineTypeParams(buttonLabel);
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

export default FilterWineTypes;
