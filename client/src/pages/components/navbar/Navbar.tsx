import styles from "./navbar.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQrcode,
  faMagnifyingGlass,
  faList,
  faUser,
  faMessage,
  faCalendar,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Navbar() {
  const navListItems = [
    { title: "Dashboard", icon: faQrcode },
    { title: "Discover Recipes", icon: faMagnifyingGlass },
    { title: "My Recipes", icon: faList },
    { title: "Clients", icon: faUser },
    { title: "Check-Ins", icon: faCalendar },
    { title: "Messages", icon: faMessage },
    { title: "Account", icon: faGear },
    { title: "Help & Support", icon: faCircleQuestion },
    { title: "Logout", icon: faRightFromBracket },
  ];

  const navList = navListItems.map((item) => {
    return (
      <li>
        <FontAwesomeIcon icon={item.icon}  />
        {item.title}
      </li>
    );
  });
  const menu = navList.slice(0, 6);
  const yourAccount = navList.slice(6);
  return (
    <div className={styles.navbar}>
      <div className="menu">
        <ul>
          <h5 className={styles.navTitle}>MENU</h5>
          {menu}
        </ul>
      </div>
      <div className="account">
        <ul>
          <h5 className={styles.navTitle}>Your Account</h5>
          {yourAccount}
        </ul>
      </div>
    </div>
  );
}
