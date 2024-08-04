import GreenButtonSCSS from "./ButtonGreen.module.scss";

type GreenButtonProps = {
  children: string;
};

const ButtonGreen = ({ children }: GreenButtonProps) => {
  const buttonClasses = `${GreenButtonSCSS.buttonContainer} ${GreenButtonSCSS.greenButton}`;

  return <button className={buttonClasses}>{children}</button>;
};

export default ButtonGreen;
