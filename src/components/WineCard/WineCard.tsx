import { Rating } from "@mui/material";

import ButtonGreen from "../ButtonGreen/ButtonGreen";

import { WineDetailsTypeProps } from "../../types/types";
import { fallbackWineImgProp } from "../../types/types";

import { currencyMap } from "../../utils/currencies.utils";

import WineCardSCSS from "./WineCard.module.scss";

const WineCard = ({ singleWine }: WineDetailsTypeProps) => {
  const { id, name, image, wine, statistics } = singleWine.vintage;
  const currencyCode = singleWine.price.currency;
  const currencyPrefix = currencyMap[currencyCode] ?? currencyCode;

  const fallbackWineImg = (wine: fallbackWineImgProp) => {
    const wineTypeId = wine.type_id;

    if (wineTypeId === 2) {
      return "../../assets/fallback_2.png";
    } else if (wineTypeId === 3) {
      return "../../assets/fallback_3.png";
    } else if (wineTypeId === 4) {
      return "../../assets/fallback_4.png";
    } else if (wineTypeId === 24) {
      return "../../assets/fallback_24.png";
    } else if (wineTypeId === 7) {
      return "../../assets/fallback_7.png";
    } else {
      return "../../assets/fallback_1.png";
    }
  };

  const wineImage = image.variations.bottle_small;
  const divStyle = {
    backgroundImage: `url(${wineImage ?? fallbackWineImg(wine)})`,
  };

  return (
    <div key={id} className={WineCardSCSS.wrapper}>
      <div className={WineCardSCSS.container}>
        <div className={WineCardSCSS.imgContainer} style={divStyle}></div>
        <div className={WineCardSCSS.contentContainer}>
          <div className={WineCardSCSS.countryInfoContainer}>
            <p className={WineCardSCSS.contentWinery}>{wine.winery.name}</p>
            <p className={WineCardSCSS.contentName}>{name}</p>
            <div className={WineCardSCSS.countryContainer}>
              <div className={WineCardSCSS.countryImageContainer}>
                <img
                  src={`https://web-common.vivino.com/assets/countryFlags/${wine.region.country.toUpperCase()}-48.png`}
                  alt=""
                  className="country-icon"
                />
              </div>
              <div className={WineCardSCSS.countryRegion}>
                {wine.region.name}
              </div>
            </div>
          </div>
        </div>
        <div className={WineCardSCSS.ratingsContainer}>
          <div className={WineCardSCSS.ratingAverage}>
            {statistics.ratings_average}
          </div>
          <div className="wine-card-rating-stars-container">
            <Rating
              name="read-only"
              value={statistics.ratings_average}
              precision={0.1}
              readOnly
              sx={{
                color: "#ba1628",
              }}
            />
          </div>
          <div className={WineCardSCSS.ratingCount}>
            {statistics.ratings_count} ratings
          </div>
          <ButtonGreen
            children={`${singleWine.price.amount.toString()} ${currencyPrefix}`}
          />
        </div>
      </div>
    </div>
  );
};

export default WineCard;
