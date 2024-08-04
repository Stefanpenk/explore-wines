import { useContext } from "react";

import ErrorCard from "../ErrorCard/ErrorCard";
import LoadingCard from "../LoadingCard/LoadingCard";
import WineCard from "../WineCard/WineCard";

import { WineContext } from "../../context/wines.context";

import MainSCSS from "./Main.module.scss";

const Main = () => {
  const { loading, error, wines } = useContext(WineContext);

  if (loading) return <LoadingCard />;
  if (error) return <ErrorCard errorMessage={error} />;

  return (
    <div className={MainSCSS.container}>
      {wines &&
        wines.map((wine) => (
          <WineCard singleWine={wine} key={wine.vintage.id} />
        ))}
    </div>
  );
};

export default Main;
