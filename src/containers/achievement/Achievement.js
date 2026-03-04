import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {certificationSection, leadershipSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

function SectionBlock({section, isDark}) {
  return (
    <div className="achievement-main-div">
      <div className="achievement-header">
        <h1
          className={
            isDark
              ? "dark-mode heading achievement-heading"
              : "heading achievement-heading"
          }
        >
          {section.title}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle achievement-subtitle"
              : "subTitle achievement-subtitle"
          }
        >
          {section.subtitle}
        </p>
      </div>
      <div className="achievement-cards-div">
        {section.achievementsCards.map((card, i) => (
          <AchievementCard
            key={i}
            isDark={isDark}
            cardInfo={{
              title: card.title,
              description: card.subtitle,
              image: card.image,
              imageAlt: card.imageAlt,
              footer: card.footerLink
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  if (!certificationSection.display && !leadershipSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        {certificationSection.display && (
          <SectionBlock section={certificationSection} isDark={isDark} />
        )}
        {leadershipSection.display && (
          <div style={{marginTop: "80px"}}>
            <SectionBlock section={leadershipSection} isDark={isDark} />
          </div>
        )}
      </div>
    </Fade>
  );
}
