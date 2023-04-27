import styles from "../../styles/main_page.module.css";
import Content_section from "./Content-section/Content_section";
import Hero_section from "./hero-section/Hero_section";
export default function Main_page() {
  return (
    <div className={styles.container}>
      <Hero_section/>
      <Content_section/>
      </div>
  );
}
