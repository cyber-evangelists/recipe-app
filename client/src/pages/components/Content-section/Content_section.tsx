import styles from "./content_section.module.css"
import Navbar from "./navbar/Navbar";
import MainSection from "./main_section/MainSection";
export default function Content_section() {
  return (
    <div className={styles.container}>
        <Navbar/>
        <MainSection/>
      </div>
  );
}
