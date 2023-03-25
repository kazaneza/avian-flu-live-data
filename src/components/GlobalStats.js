import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  HiOutlineClock,
  HiOutlinePlusCircle,
  HiOutlineMinusCircle,
  HiEyeOff,
  HiEye,
} from "react-icons/hi";
import { timestampToDate } from "./Continent";
import s from "./GlobalStats.module.scss";

export default function GlobalStats() {
  const [showGlobalStats, setShowGlobalStats] = useState(false);
  const { global } = useSelector((state) => state.continents);
  const {
    updated,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    active,
    critical,
  } = global;
  return (
    <div className={s["global-stats"]}>
      <div className={s["actions"]}>
        {!showGlobalStats && (
          <h3 className={s["header"]}>
            <HiOutlinePlusCircle
              className={s["icon"]}
              onClick={() => setShowGlobalStats(true)}
            />{" "}
            Show Avian Flu Global Stats
          </h3>
        )}
        {showGlobalStats && (
          <h3 className={s["header"]}>
            <HiOutlineMinusCircle
              className={s["icon"]}
              onClick={() => setShowGlobalStats(false)}
            />{" "}
            Hide Avian Flu Global Stats
          </h3>
        )}
        <button
          type="button"
          onClick={() => setShowGlobalStats(!showGlobalStats)}
        >
          {!showGlobalStats && (
            <span className={`${s["show"]} ${s["option"]}`}>
              Show <HiEye className={s["icon"]} />
            </span>
          )}
          {showGlobalStats && (
            <span className={`${s["show"]} ${s["option"]}`}>
              Hide <HiEyeOff className={s["icon"]} />
            </span>
          )}
        </button>
      </div>

      {showGlobalStats && (
        <div className={s["stats-wrapper"]}>
          <h3>Global Avian Flu Stats</h3>
          <ul className={s["stats-list"]}>
            <li>
              Population: <span>{population}</span>
            </li>
            <li>
              Cases: <span> {cases}</span>
            </li>
            <li>
              Today cases: <span>{todayCases}</span>
            </li>
            <li>
              Deaths: <span>{deaths}</span>
            </li>
            <li>
              Today Deaths: <span>{todayDeaths}</span>
            </li>
            <li>
              Recovered: <span>{recovered}</span>
            </li>
            <li>
              Today recovered: <span>{todayRecovered}</span>
            </li>
            <li>
              Active: <span>{active}</span>
            </li>
            <li>
              Critical: <span>{critical}</span>
            </li>
          </ul>
          <p className={s["updated-time"]}>
            <HiOutlineClock className={s["icon"]} /> Updated at:{" "}
            <span>{timestampToDate(updated)}</span>
          </p>
        </div>
      )}
    </div>
  );
}
