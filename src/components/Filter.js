/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { continentsActions } from "../redux/continentsSlice";
import { countriesActions } from "../redux/countriesSlice";
import s from "./Filter.module.scss";

export default function Filter() {
  const [numStr, setNumStr] = useState("");
  const [showClearButton, setShowClearButton] = useState(false);
  const { view } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const countryOptions = [
    ["1,10000000", "0 - 10,000,000"],
    ["10000001,20000000", "10,000,001 - 20,000,000"],
    ["20000001,30000000", "20,000,001 - 30,000,000"],
    ["30000001,40000000", "30,000,001 - 40,000,000"],
    ["40000001,50000000", "40,000,001 - 50,000,000"],
    ["50000001,60000000", "50,000,001 - 60,000,000"],
    ["60000001,70000000", "60,000,001 - 70,000,000"],
    ["70000001,80000000", "70,000,001 - 80,000,000"],
    ["80000001,90000000", "80,000,001 - 90,000,000"],
    ["90000001,100000000", "90,000,001 - 100,000,000"],
    ["100000001,110000000", "100,000,001 - 110,000,000"],
  ];

  const continentOptions = [
    ["1,20000000", "0 - 20,000,000"],
    ["20000001,40000000", "20,000,001 - 40,000,000"],
    ["40000001,60000000", "40,000,001 - 60,000,000"],
    ["60000001,80000000", "60,000,001 - 80,000,000"],
    ["80000001,100000000", "80,000,001 - 100,000,000"],
    ["100000001,120000000", "100,000,001 - 120,000,000"],
    ["120000001,140000000", "120,000,001 - 140,000,000"],
  ];

  let options = [];
  let labelId = "";

  if (view === "countries") {
    options = [...countryOptions];
    labelId = "countries";
  }
  if (view === "continents") {
    options = [...continentOptions];
    labelId = "continents";
  }

  const valueChangeHandler = (e) => {
    const val = e.target.value;

    setNumStr(val);
    if (view === "countries") {
      dispatch(countriesActions.triggerCountryFilterByCases(val));
    }
    if (view === "continents") {
      dispatch(continentsActions.triggerContinentFilterByCases(val));
    }
    setShowClearButton(true);
  };

  const handleClearFilters = () => {
    setNumStr("");
    if (view === "countries") {
      dispatch(countriesActions.triggerCountryFilterByCases(""));
    }
    if (view === "continents") {
      dispatch(continentsActions.triggerContinentFilterByCases(""));
    }
    setShowClearButton(false);
  };

  return (
    <div className={s["filter"]}>
      <label htmlFor={labelId}>
        <h3>Filter by reported cases</h3>
      </label>
      <div className={s["select-wrapper"]}>
        <select id={labelId} value={numStr} onChange={valueChangeHandler}>
          <option value="">Choose range</option>
          {options.map((op) => (
            <option key={op[0]} value={op[0]}>
              {op[1]}
            </option>
          ))}
        </select>
        {showClearButton && (
          <button onClick={handleClearFilters} type="button">
            x Clear Filters
          </button>
        )}
      </div>
    </div>
  );
}
