"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Lumen from "../../../components/Lumen";
import SquareButton from "../../../components/SquareButton";
import NavigationBar from "../../../components/NavigationBar";
import SpeechBubble from "../../../components/SpeechBubble";
import Inventory from "../../../components/Inventory";
import FurnitureSpace from "../../../components/FurnitureSpace";

export default function Planet() {
  const [showMessage, setShowMessage] = useState(false);
  const [isDecorating, setIsDecorating] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [placedItems, setPlacedItems] = useState({ A: null, B: null, C: null });

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("youniverse_layout");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          setPlacedItems(parsed);
        }
      }
    } catch (e) {}
  }, []);

  const handleLumenClick = () => {
    if (!isDecorating) {
      setShowMessage((prev) => !prev);
    }
  };

  const handleDecorateClick = () => {
    setIsDecorating(true);
    setShowMessage(false);
    setSelectedItem(null);
  };

  const handleCloseDecorate = () => {
    setIsDecorating(false);
    setSelectedItem(null);
  };

  const handleDoneDecorate = () => {
    try {
      window.localStorage.setItem("youniverse_layout", JSON.stringify(placedItems));
    } catch (e) {}
    setIsDecorating(false);
    setSelectedItem(null);
  };

  const handleSelectItem = (itemName) => {
    if (selectedItem === itemName) {
      setPlacedItems((prev) => {
        const next = { ...prev };
        Object.keys(next).forEach((k) => {
          if (next[k] === itemName) {
            next[k] = null;
          }
        });
        return next;
      });
      setSelectedItem(null);
    } else {
      setSelectedItem(itemName);
    }
  };

  const handlePlaceItem = (spaceKey) => {
    if (!selectedItem) {
      return;
    }
    setPlacedItems((prev) => {
      const next = { ...prev };
      Object.keys(next).forEach((k) => {
        if (next[k] === selectedItem) {
          next[k] = null;
        }
      });
      next[spaceKey] = selectedItem;
      return next;
    });
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

      <div className={styles.furnitureSpace__A} onClick={() => isDecorating && handlePlaceItem("A")}>
        <FurnitureSpace variant={isDecorating ? "visible" : "hidden"} item={placedItems.A} />
      </div>
      <div className={styles.furnitureSpace__B} onClick={() => isDecorating && handlePlaceItem("B")}>
        <FurnitureSpace variant={isDecorating ? "visible" : "hidden"} item={placedItems.B} />
      </div>
      <div className={styles.furnitureSpace__C} onClick={() => isDecorating && handlePlaceItem("C")}>
        <FurnitureSpace variant={isDecorating ? "visible" : "hidden"} item={placedItems.C} />
      </div>

      {isDecorating && (
        <div className={styles.inventory}>
          <Inventory
            onClose={handleCloseDecorate}
            onDone={handleDoneDecorate}
            onSelectItem={handleSelectItem}
            selectedItem={selectedItem}
          />
        </div>
      )}

      {!isDecorating && (
        <div className={styles.decorateButton}>
          <SquareButton
            variant="active"
            iconSrc="/icons/button_icons/DecorateIcon.svg"
            alt="Decorate Button"
            onClick={handleDecorateClick}
          />
        </div>
      )}

      <div className={styles.navigationBar}>
        <NavigationBar variant="PlanetSelected" />
      </div>
    </section>
  );
}