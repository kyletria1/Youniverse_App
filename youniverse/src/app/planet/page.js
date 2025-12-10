"use client";
import {useState} from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Lumen from "../../../components/Lumen";
import SquareButton from "../../../components/SquareButton";
import NavigationBar from "../../../components/NavigationBar";
import FurnitureSpace from "../../../components/FurnitureSpace";
import SpeechBubble from "../../../components/SpeechBubble";
import Inventory from "../../../components/Inventory"
import messages from '../../../public/motivationalmessages.json'

export default function Planet() {
  const [showMessage, setShowMessage] = useState(false);

  const handleLumenClick = () => {
    setShowMessage((prev) => !prev); 
  };

    const changeMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    changeMessage(messages[randomIndex].quote);
    setShowMessage(true);
  };

  return (
    <section className="screen">
      <Image
        src="/background_images/PlanetInterfaceBackground.svg"
        alt="Youniverse Planet Interface Background"
        width={393}
        height={852}
        priority
        className={styles.intro__image}
      />
      
      <div className={styles.lumen}>
        <Lumen onClick={handleLumenClick} />

        {showMessage && (
          <div className={styles.speechBubble}>
            <SpeechBubble />
          </div>
        )}
      </div>

      <div className={styles.decorateButton}>
        <SquareButton
          variant="active"
          iconSrc="/icons/button_icons/DecorateIcon.svg"
          alt="Decorate Button"
        />
      </div>

      <div className={styles.navigationBar}>
        <NavigationBar variant="PlanetSelected" />
      </div>
    </section>
  );
}