import { ComponentType } from "react";

import styles from "../styles/About.module.css";

const About: ComponentType = () => {
  return (
    <div className={styles.about_container}>
      <h1>Izradjujemo namestaj od iverice, medijapana, drveta i kombinacija tih materijala sa metalom</h1>
      <br />
      <h1>Za nase kupce obezbedjujemo besplatan prevoz i ugradnju namestaja</h1>
    </div>
  )
}

export default About;