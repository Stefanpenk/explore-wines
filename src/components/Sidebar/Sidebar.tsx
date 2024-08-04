import FilterCountries from "../FilterCountries/FilterCountries";
import FilterWineTypes from "../FilterWineTypes/FilterWineTypes";
import FilterRegions from "../FilterRegions/FilterRegions";
import { FilterPriceRange } from "../FilterPriceRange/FilterPriceRange";

import SidebarSCSS from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={SidebarSCSS.container}>
      <FilterCountries />
      <FilterWineTypes />
      <FilterRegions />
      <FilterPriceRange />
    </div>
  );
};

export default Sidebar;
