import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  HiAdjustments,
  HiOutlineDownload,
  HiOutlineX,
  HiUpload,
  HiDownload,
  HiOutlineSwitchVertical,
} from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

import s from "./Header.module.scss";
import { uiActions } from "../redux/UISlice";

function Header() {
  const { pathname } = useLocation();
  const [showPopper, setShowPopper] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { sortBy, view, sortTriggered } = useSelector((state) => state.ui);

  const showPopperHandler = () => {
    setShowPopper(!showPopper);
  };

  const sortAscendingHandler = () => {
    dispatch(uiActions.sortAscending());
  };

  const sortDescendingHandler = () => {
    dispatch(uiActions.sortDescending());
  };

  const resetSortHandler = () => {
    dispatch(uiActions.resetSort());
  };

  return (
    <header className={s["header"]}>
      <div className={`${s["header-container"]} row`}>
        <div className={s["logo-wrapper"]}>
          <Link to="/" className={s["logo"]}>
            {pathname.includes("countries") ? (
              <HiOutlineDownload className={s["back-icon"]} />
            ) : (
              " Avian Flu Data"
            )}
          </Link>
        </div>
        <nav className={s["nav"]}>
          <ul className={s["nav-list"]}>
            <li>
              <NavLink
                to="/"
                className={(state) =>
                  state.isActive ? "nav-link-active" : null
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={(state) =>
                  state.isActive ? "nav-link-active" : null
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {!showPopper && (
            <HiAdjustments
              className={s["adjustments-icon"]}
              onClick={showPopperHandler}
            />
          )}

          {showPopper && (
            <HiOutlineX
              className={s["close-icon"]}
              onClick={() => setShowPopper(false)}
            />
          )}

          {showPopper && (
            <div className={s["popper-wrapper"]}>
              {(sortBy === "" || sortBy === "dsc") && (
                <button
                  type="button"
                  className={`${s["popper-btn"]} ${s["sort-btn"]}`}
                  onClick={sortAscendingHandler}
                >
                  Sort Ascending <HiUpload className={s["btn-icon"]} />
                </button>
              )}
              {sortBy === "asc" && (
                <button
                  type="button"
                  className={`${s["popper-btn"]} ${s["sort-btn"]}`}
                  onClick={sortDescendingHandler}
                >
                  Sort Descending <HiDownload className={s["btn-icon"]} />
                </button>
              )}
              {(sortBy === "asc" || sortBy === "dsc") && (
                <button
                  type="button"
                  className={`${s["popper-btn"]} ${s["reset-sort-btn"]}`}
                  onClick={resetSortHandler}
                >
                  Reset sorting{" "}
                  <HiOutlineSwitchVertical
                    className={`${s["btn-icon"]} ${s["reset-btn-icon"]}`}
                  />
                </button>
              )}
              <hr className="divider" />
              <Link
                className={s["nav-link"]}
                to="/"
                onClick={() => setShowPopper(false)}
              >
                Home
              </Link>
              <Link
                className={s["nav-link"]}
                to="/contact"
                onClick={() => setShowPopper(false)}
              >
                contact
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
