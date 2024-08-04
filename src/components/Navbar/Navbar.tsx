import { ReactComponent as VivinoLogo } from "../../assets/vivino_logo.svg";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import NavbarSCSS from "./Navbar.module.scss";

const Navigation = () => {
  return (
    <div className={NavbarSCSS.navigation}>
      <div className={NavbarSCSS.logoContainer}>
        <VivinoLogo />
      </div>
      <div className={NavbarSCSS.navLinksContainer}>
        <div className={NavbarSCSS.navLink}>
          <ShoppingCartOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
