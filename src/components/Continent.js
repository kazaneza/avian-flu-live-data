import React, { useState } from "react";
import { HiMinus, HiPlus, HiOutlineClock } from "react-icons/hi";
import { Link } from "react-router-dom";
import s from "./Continent.module.scss";

export function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Continent(props) {
  const [showCountries, setShowCountries] = useState(false);

  const {
    updated,
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
    countries: countriesArr,
  } = props.data;

  return (
    <div className={s["continent"]}>
      <h2 className={s["title"]}>
        Continent: <span>{continent}</span>{" "}
      </h2>
      <hr className="divider" />
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
            Population: <span>{population}</span>
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
        <span className={s["time"]}>{timestampToDate(updated)}</span>
      </p>
      <div className={s["countries-wrapper"]}>
        <button
          type="button"
          className={s["toggle-countries"]}
          onClick={() => setShowCountries(!showCountries)}
        >
          {!showCountries && (
            <div className={`${s["show"]} ${s["option"]}`}>
              <span className={s["icon-wrapper"]}>
                <HiPlus className={s["icon"]} />
              </span>
              <p>Show countries</p>
            </div>
          )}
          {showCountries && (
            <div className={`${s["hide"]} ${s["option"]}`}>
              <span className={s["icon-wrapper"]}>
                <HiMinus className={s["icon"]} />
              </span>
              <p>Hide countries</p>
            </div>
          )}
        </button>
        {showCountries && (
          <div className={s["countries"]}>
            <ul>
              {countriesArr.map((c) => (
                <li key={c}>
                  <Link
                    className={s["view-country-link"]}
                    to={`/countries/${c}`}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
