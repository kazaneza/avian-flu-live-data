import React from "react";
import { HiHeart } from "react-icons/hi";
import s from "./Footer.module.scss";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className="row">
        <hr className="divider-3" />
      </div>
      <div className={`${s["footer-container"]} row`}>
        <p className={s["built-by"]}>
          Built with <HiHeart className={s["heart-icon"]} /> by{" "}
          <a href="https://github.com/kazaneza" target="_blank" rel="noreferrer">
            Kazaneza for Serious
          </a>
        </p>
        <div className="socials">
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
