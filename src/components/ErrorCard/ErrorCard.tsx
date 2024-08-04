import { Typography } from "@mui/material";

import ErrorCardSCSS from "./ErrorCard.module.scss";

export type ErrorProps = {
  errorMessage: string | null;
};

const ErrorCard: React.FC<ErrorProps> = ({ errorMessage }) => {
  return (
    <div className={ErrorCardSCSS.container}>
      <img
        src="https://www.vivino.com/packs/67cfed12be2a917bdbc4705a272a7985.png"
        alt="Error"
        className="error-loader-image"
      />
      <Typography variant="h3" component="p">
        Something went wrong...
      </Typography>
      <Typography variant="h3" component="p">
        {errorMessage}
      </Typography>
    </div>
  );
};

export default ErrorCard;
