import styles from "./RewardModal.module.css"
import Button from "./Button"
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function RewardModal({iconSrc, alt=""}){
    const router = useRouter();
    return(
            <section className={styles.modal}>
                <h1 className={styles.modal__heading}>Congratulations!</h1>
                <p className={styles.modal__text}>You Earned A Reward!</p>
                {iconSrc && (
                    <Image
                        src={iconSrc}
                        alt={alt}
                        width={100}
                        height={100}
                        priority
                        className={styles.modal__reward}/>
                    )}
                <div className={styles.modal__button}>
                    <Button variant="interface" onClick={() => router.push("/learn")}>Done</Button>
                </div>
            </section>
    );
}