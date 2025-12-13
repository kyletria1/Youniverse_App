import styles from "./ArticleCard.module.css"
import {useRouter} from "next/navigation";

export default function ArticleCard({
    children,
    route = "/learn",              
    ...props
}) {
    const router = useRouter();

    return(
        <button
        className={styles.card}
        {...props} onClick={() => router.push(route)}>
        <p className={styles.text}>
          {children}
        </p>
      </button>
    );
}