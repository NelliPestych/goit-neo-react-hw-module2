// components/Description/Description.jsx
import styles from "./Description.module.css";

function Description({ title, subtitle }) {
    return (
        <div className={styles.description}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}

export default Description;
