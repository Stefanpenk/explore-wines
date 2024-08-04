import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

import HomeSCSS from "./Home.module.scss";

const Home = () => {
  return (
    <div className={HomeSCSS.container}>
      <Navbar />
      <div className={HomeSCSS.mainContainer}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
