import { ButtonProps } from "../../types/types";

const ButtonRed: React.FC<ButtonProps> = ({
  children,
  handleClick,
  buttonClasses,
}) => {
  return (
    <button className={buttonClasses} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ButtonRed;
