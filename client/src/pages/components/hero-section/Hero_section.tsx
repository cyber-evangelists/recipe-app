import styles from './hero_section.module.css';
import Hero_Left from "./Hero_Left";
import Hero_Right from './Hero_Right';
export default function Hero_section() {
  return (
    <>
      <div className={styles.hero_section}>
        <Hero_Left/>
        <Hero_Right/>
      </div>
    </>
  );
}
