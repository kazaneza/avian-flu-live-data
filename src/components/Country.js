import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { timestampToDate } from "./Continent";
import s from "./Country.module.scss";
import flagPlaceholder from "../extraImages/flag-placeholder.png";

export default function Country(props) {
  const {
    updated,
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    todayRecovered,
    population,
    continent,
    active,
    critical,
    countryInfo,
  } = props?.data;
  return (
    <div className={s["country"]}>
      <hr className="divider-2" />
      <div className={s["header"]}>
        <img
          src={countryInfo?.flag || { flagPlaceholder }}
          alt={`${country} flag`}
          className={s["flag"]}
        />
        <div className={s["details"]}>
          <h2 className={s["title"]}>
            Country: <span className={s["country-name"]}>{country}</span>
          </h2>
          <p className={s["detail"]}>
            Population: <span>{population}</span>
          </p>
          <p className={s["detail"]}>
            Continent: <span>{continent}</span>
          </p>
        </div>
      </div>

      <div className={s["stats"]}>
        <ul className={s["stats-list"]}>
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
      </div>
      <p className={s["updated-time"]}>
        <HiOutlineClock className={s["icon"]} /> Updated at:{" "}
        <span className="time">{timestampToDate(updated)}</span>
      </p>
    </div>
  );
}
