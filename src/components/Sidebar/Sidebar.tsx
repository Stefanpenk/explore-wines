import FilterCountries from "../FilterCountries/FilterCountries";
import FilterWineTypes from "../FilterWineTypes/FilterWineTypes";

import SidebarSCSS from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={SidebarSCSS.container}>
      <FilterCountries />
      <FilterWineTypes />
    </div>
  );
};

export default Sidebar;
