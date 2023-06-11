import React from "react";
import DoughnutChart from "./DoughnutChart";
import style from "./dashboardstyle/Traffictile.module.scss";
const Traffictile = () => {
  const data = {
    labels: ["Search", "Direct"],
    datasets: [
      {
        label: "Poll",
        data: [50, 50],
        backgroundColor: ["#e17cfd", "#4cd7f6"],
        borderColor: ["#e17cfd", "#4cd7f6"],
        cutout: 30,
      },
    ],
  };
  return (
    <div className={style.traffictile}>
      <h4 className={style.traffictiletext}>Traffic Sources</h4>
      <div className={style.traffictilediv}>
        <div className={style.traffictilesubdiv}>
          <div className={style.traffictileheading}>
            <div>Source</div>
            <div>Traffic %</div>
          </div>
          <div className={style.traffictilecontent}>
            <div className={style.traffictilecontentsource}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#4cd7f6",
                  marginRight: "10px",
                }}
              ></div>
              <div>Direct</div>
            </div>
            <div>50</div>
          </div>
          <div className={style.traffictilecontent}>
            <div className={style.traffictilecontentsource}>
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#e17cfd",
                  marginRight: "10px",
                }}
              ></div>
              <div>Search</div>
            </div>
            <div>50</div>
          </div>
        </div>
        <div className={style.chart}>
          <DoughnutChart data={data} />
        </div>
      </div>
    </div>
  );
};

export default Traffictile;
