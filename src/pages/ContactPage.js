import React from "react";
import DeveloperContent from "../components/DeveloperContent";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import s from "./ContactPage.module.scss";

function ContactPage() {
  const extraComps = (
    <div className={s["contact-header"]}>
      <h1>Contact Serious.</h1>
    </div>
  );
  return (
    <main className={s["contact-page"]}>
      <Hero
        title="Contact the developer"
        showFilters={false}
        opacity={0.5}
        showHeader={false}
        extraComps={extraComps}
      />
      <div className={`${s["body-content"]} row`}>
        <hr className="divider-2" />
        <div className={s["author-wrapper"]}>
          <div className={s["image-wrapper"]}>
            <img
              src="https://www.linkedin.com/in/serieux-cyubahiro-b7a24b178/overlay/photo/"
              alt="Serious"
              className={s["author-img"]}
            />

          </div>

          <div className={s["details"]}>
            <h3>serieux cyubahiro</h3>
            <h4>Environmental Health Specialist</h4>
            <Socials />
          </div>
        </div>
        <div className={s["content"]}>
          <DeveloperContent />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
