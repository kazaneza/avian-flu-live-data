import { BsLinkedin, BsTwitter } from "react-icons/bs";
import s from "./Socials.module.scss";

export default function Socials() {
  return (
    <div className={s["socials"]}>

      <a
        href="https://www.linkedin.com/in/serieux-cyubahiro-b7a24b178/"
        target="_blank"
        rel="noreferrer"
        className={s["icon-wrapper"]}
      >
        <BsLinkedin className={s["icon"]} />
      </a>
      <a
        href="https://twitter.com/Serieux_84"
        target="_blank"
        rel="noreferrer"
        className={s["icon-wrapper"]}
      >
        <BsTwitter className={s["icon"]} />
      </a>
    </div>
  );
}
