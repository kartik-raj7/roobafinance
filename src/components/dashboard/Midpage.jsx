import React from "react";
import styles from "./dashboardstyle/Midpage.module.scss";
import { CategoryScale, LinearScale, PointElement } from "chart.js";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Chart } from "chart.js";
import ChartComponent from "./ChartComponent";
import data from "../../data/chartdata";
import Dashboardtile from "./Dashboardtile";
import { motion } from "framer-motion";
const Midpage = () => {
  const [selectedfilter, setselectedfilter] = useState("30");
  function select(value) {
    setselectedfilter(value);
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };
  const tileVariants = {
    hover: {
      scale: 1.1,
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div>
      <div className={styles.midpage}>
        <div className={styles.project}>
          <div className={styles.name}>Project Statistic</div>
          <div className={styles.question}>
            <BsFillQuestionCircleFill />
          </div>
        </div>
        <div className={styles.filters}>
          <div
            onClick={() => select("30")}
            className={
              selectedfilter === "30" ? styles.filtersel : styles.filter
            }
          >
            30 days
          </div>
          <div
            onClick={() => select("60")}
            className={
              selectedfilter === "60" ? styles.filtersel : styles.filter
            }
          >
            60 days
          </div>
          <div
            onClick={() => select("90")}
            className={
              selectedfilter === "90" ? styles.filtersel : styles.filter
            }
          >
            90 days
          </div>
          <div
            onClick={() => select("120")}
            className={
              selectedfilter === "120" ? styles.filtersel : styles.filter
            }
          >
            120 days
          </div>
        </div>
      </div>
      <div className={styles.datadisplay}>
        <div className={styles.chart}>
          <div className={styles.title}>
            <h3 style={{fontWeight:'normal'}}>Total Visits</h3>
            <h2 className={styles.titleviews}>42,43M</h2>
          </div>
          <ChartComponent data={data} />
        </div>
        <motion.div
          className={styles.dashboardtiles}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.dashboardtilediv} variants={item}>
            <motion.div whileHover="hover" variants={tileVariants}>
              <Dashboardtile
                icon={"chart"}
                help={"help"}
                grow={"up"}
                percentage={"4%"}
                numbers={"4234%"}
                heading={"Bounce rate"}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.dashboardtilediv} variants={item}>
            <motion.div whileHover="hover" variants={tileVariants}>
              <Dashboardtile
                icon={"calendar"}
                help={"help"}
                numbers={"4234%"}
                heading={"Pages per visit"}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.dashboardtilediv} variants={item}>
            <motion.div whileHover="hover" variants={tileVariants}>
              <Dashboardtile
                icon={"user"}
                grow={"down"}
                percentage={"2.1%"}
                numbers={"326.60K"}
                heading={"Total monthly visit"}
              />
            </motion.div>
          </motion.div>
          <motion.div className={styles.dashboardtilediv} variants={item}>
            <motion.div whileHover="hover" variants={tileVariants}>
              <Dashboardtile
                icon={"time"}
                grow={"down"}
                percentage={"2.1%"}
                numbers={"time"}
                heading={"Average Visit Duration"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Midpage;
