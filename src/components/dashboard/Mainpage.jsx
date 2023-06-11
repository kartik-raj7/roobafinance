import React from "react";
import Topbar from "./Topbar";
import Midpage from "./Midpage";
import Bottompage from "./Bottompage";
import styles from "./dashboardstyle/Mainpage.module.scss";
const Mainpage = () => {
  return (
    <div className={styles.mainpage}>
      <div className={styles.mainpagesub}>
        <Topbar />
        <Midpage />
        <Bottompage />
      </div>
    </div>
  );
};

export default Mainpage;
