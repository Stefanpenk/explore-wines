import { Typography } from "@mui/material";
import WineLoaderImg from "../../assets/peach-goma.gif";

import LoadingCardSCSS from "./LoadingCard.module.scss";

const LoadingCard = () => {
  return (
    <div className={LoadingCardSCSS.container}>
      <img
        src={WineLoaderImg}
        alt="Wine loading"
        className="wine-loader-image"
      />
      <Typography variant="h3" component="p">
        Loading wines...
      </Typography>
    </div>
  );
};

export default LoadingCard;
