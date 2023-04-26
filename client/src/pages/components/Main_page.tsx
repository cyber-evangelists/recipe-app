import styles from "../../styles/main_page.module.css";
import Hero_section from "./hero-section/Hero_section";
import MainSection from "./main_section/MainSection";
import Navbar from "./navbar/Navbar";
export default function Main_page() {
  return (
    <div className={styles.container}>
      <Hero_section/>
      <Navbar/>
      <MainSection/>
      </div>
  );
}
