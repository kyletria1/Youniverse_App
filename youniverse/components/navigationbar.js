import styles from "./NavigationBar.module.css";
import Image from "next/image";

export default function NavigationBar({ variant = "PlanetSelected" }) {
  const iconMap = {
    PlanetSelected: {
      Planet: "PlanetIconSelected.svg",
      Dream: "DreamIconDefault.svg",
      Learn: "LearnIconDefault.svg",
      Settings: "SettingsIconDefault.svg",
    },

    DreamSelected: {
      Planet: "PlanetIconDefault.svg",
      Dream: "DreamIconSelected.svg",
      Learn: "LearnIconDefault.svg",
      Settings: "SettingsIconDefault.svg",
    },

    LearnSelected: {
      Planet: "PlanetIconDefault.svg",
      Dream: "DreamIconDefault.svg",
      Learn: "LearnIconSelected.svg",
      Settings: "SettingsIconDefault.svg",
    },

    Settings: {
      Planet: "PlanetIconDefault.svg",
      Dream: "DreamIconDefault.svg",
      Learn: "LearnIconDefault.svg",
      Settings: "SettingsIconSelected.svg",
    },
  };
  // [AI Generated Code(Lines 5 to 33)]: iconMap defines which icon file to use depending on the active variant. Each variant corresponds to one tab being "selected" while the others remain "default".
  
  const tabs = ["Planet", "Dream", "Learn", "Settings"];

  return (
    <nav className={styles.navigation}>
      {tabs.map((tab) => {
        const iconSrc = `/icons/navigation_icons/${iconMap[variant][tab]}`;
        const iconClass = styles[`navigation__icon--${tab.toLowerCase()}`];
        const buttonClass = styles.navigation__button;
        const isSelected = variant.toLowerCase().includes(tab.toLowerCase());
        // [AI Generated Code(Lines 40 to 44)]: First, loop through each tab and render a button. Pick the correct icon file based on the current variant and tab name. Then uild a CSS class for the icon based on the tab name. Finally, Check if this tab is the selected one by seeing if the variant string includes the tab name.

        return (
          <button key={tab} className={buttonClass}>
            <Image
              src={iconSrc}
              alt={`${tab} Icon`}
              width={50}
              height={50}
              priority
              className={iconClass}
            />
            <span
              className={`${styles.navigation__text} ${
                isSelected ? styles["navigation__text--selected"] : ""
              }`}
            >
              {tab}
            </span>
          </button>
        );
      })}
    </nav>
  );
}