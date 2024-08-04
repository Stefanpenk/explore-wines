import FilterCountries from "../FilterCountries/FilterCountries";
import FilterWineTypes from "../FilterWineTypes/FilterWineTypes";
import FilterRegions from "../FilterRegions/FilterRegions";

import SidebarSCSS from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={SidebarSCSS.container}>
      <FilterCountries />
      <FilterWineTypes />
      <FilterRegions />
    </div>
  );
};

export default Sidebar;
