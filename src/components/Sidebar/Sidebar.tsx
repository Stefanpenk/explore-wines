import FilterCountries from "../FilterCountries/FilterCountries";

import SidebarSCSS from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={SidebarSCSS.container}>
      <FilterCountries />
    </div>
  );
};

export default Sidebar;
