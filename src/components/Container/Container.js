import Header from "../Header/Header";
import Form from "../Form/Form";
import CurrentDay from "../CurrentDay/CurrentDay";
import OtherDays from "../OtherDays/OtherDays";
import Footer from "../Footer/Footer";
import { useTheme } from "../../context/ThemeContext";
import styles from "./Container.module.css";

function Container() {
  const { theme } = useTheme();
  console.log("Theme:", theme);
  return (
    <div className={`${theme === "dark" ? styles.darkMode : styles.lightMode}`}>
      <Header />
      <Form />
      <CurrentDay />
      <OtherDays />
      <Footer />
    </div>
  );
}

export default Container;
