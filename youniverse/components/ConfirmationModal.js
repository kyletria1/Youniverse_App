import {useState} from "react";
import styles from "./ConfirmationModal.module.css"

export default function ConfirmationModal(){
    return (
        <div className={styles.modal}>
            <h1 className={styles.modal__title}>Is The Information Entered Correct?</h1>
            <div className={styles.modal__decisionButton}>
                <button className={`${styles.button} ${styles['button--left']}`}>No</button>
                <button className={`${styles.button} ${styles['button--right']}`}>Yes</button>
            </div>
        </div>
    )
}