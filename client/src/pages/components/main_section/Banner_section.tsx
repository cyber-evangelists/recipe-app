import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./banner_section.module.css";
import { faClock, faS, faStar } from "@fortawesome/free-solid-svg-icons";
export default function Banner_section() {
  const rating = (
    <div className={styles.rating}>
      <FontAwesomeIcon icon={faStar} size="2xs" style={{ color: "#facf55" }} />
      <FontAwesomeIcon icon={faStar} size="2xs" style={{ color: "#facf55" }} />
      <FontAwesomeIcon icon={faStar} size="2xs" style={{ color: "#facf55" }} />
      <FontAwesomeIcon icon={faStar} size="2xs" style={{ color: "#facf55" }} />
      <FontAwesomeIcon icon={faStar} size="2xs" style={{ color: "#facf55" }} />
    </div>
  );
  return (
    <div className={styles.banner_section}>
      <div className={styles.recipe_add}>
        <span>POPULAR</span>
        <p>Vegan:chicken & Chips</p>
        <p>with Pancakes</p>
        <div className={styles.time}>
          <FontAwesomeIcon icon={faClock} />
          <p>25 min</p>
          {rating}
        </div>
      </div>
    </div>
  );
}
