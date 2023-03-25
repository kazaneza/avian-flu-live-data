import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Continent from "../components/Continent";
import Country from "../components/Country";
import GlobalStats from "../components/GlobalStats";
import Hero from "../components/Hero";
import { getContinentsData, getGlobalData } from "../redux/continentsSlice";
import { getCountriesData } from "../redux/countriesSlice";
import s from "./CountriesDataPage.module.scss";

function CountriesDataPage() {
  const dispatch = useDispatch();
  const {
    countries: countriesData,
    countrySearchTerm,
    countryFilterByCasesNumArr,
    isLoading: countriesLoading,
  } = useSelector((state) => state.countries);
  const {
    continents: continentsData,
    continentSearchTerm,
    continentFilterByCasesNumArr,
    isLoading: continentsLoading,
  } = useSelector((state) => state.continents);
  const { sortTriggered, view, sortBy } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(getCountriesData());
    dispatch(getContinentsData());
    dispatch(getGlobalData());
  }, [dispatch]);

  let countries = [...countriesData];
  let continents = [...continentsData];
  const sortHelper = (options) => {
    const { sortTriggered, view, sortBy } = options;

    if (!sortTriggered) return;
    if (view === "countries" && sortBy === "asc") {
      countries = countries.sort((a, b) => a.cases - b.cases);
    }
    if (view === "countries" && sortBy === "dsc") {
      countries = countries.sort((b, a) => a.cases - b.cases);
    }
    if (view === "continents" && sortBy === "asc") {
      continents = continents.sort((a, b) => a.cases - b.cases);
    }
    if (view === "continents" && sortBy === "dsc") {
      continents = continents.sort((b, a) => a.cases - b.cases);
    }
  };

  // Calling sort Handler => acting as a middleware
  sortHelper({ sortTriggered, view, sortBy });

  // eslint-disable-next-line no-unused-vars
  function filterCountriesByCasesMiddleware(dataArr) {
    if (countryFilterByCasesNumArr.length === 0) {
      return dataArr;
    }
    return dataArr.filter(
      (item) =>
        item.cases >= +countryFilterByCasesNumArr[0] &&
        item.cases <= +countryFilterByCasesNumArr[1]
    );
  }

  // eslint-disable-next-line no-unused-vars
  function filterContinentsByCasesMiddleware(dataArr) {
    if (continentFilterByCasesNumArr.length === 0) {
      return dataArr;
    }
    return dataArr.filter(
      (item) =>
        item.cases >= continentFilterByCasesNumArr[0] &&
        item.cases <= continentFilterByCasesNumArr[1]
    );
  }

  // eslint-disable-next-line no-unused-vars
  const filterCountries = (dataArr) => {
    return filterCountriesByCasesMiddleware(dataArr).filter((item) =>
      item.country.toLowerCase().includes(countrySearchTerm)
    );
  };

  // eslint-disable-next-line no-unused-vars
  const filterContinents = (dataArr) => {
    return filterContinentsByCasesMiddleware(dataArr).filter((item) =>
      item.continent.toLowerCase().includes(continentSearchTerm)
    );
  };

  return (
    <main className={s["home-page"]}>
      <Hero />
      <div className={`${s["display-wrapper"]} row`}>
        <GlobalStats />
        {view === "countries" && (
          <div className={s["countries-view"]}>
            <ul className={s["countries-list"]}>
              {filterCountries(countries).map((c, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Country key={`${c.country}${i}`} data={c} />
              ))}
              {!countriesLoading && countries.length === 0 && (
                <p>No data to show.</p>
              )}
              {countriesLoading && <p>Loading...</p>}
            </ul>
          </div>
        )}

        {view === "continents" && (
          <div className={s["continents-view"]}>
            <ul className={s["continents-list"]}>
              {filterContinents(continents).map((con, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <Continent key={`${con.continent}${i}`} data={con} />
              ))}
              {!continentsLoading && continents.length === 0 && (
                <p>No data to show.</p>
              )}
              {continentsLoading && <p>Loading...</p>}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}

export default CountriesDataPage;
