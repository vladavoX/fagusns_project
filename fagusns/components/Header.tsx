import { NextComponentType } from "next";
import Image from "next/image";

import styles from "../styles/Header.module.css";

const Header: NextComponentType = () => {
  return (
    <header className={styles.header_container}>
      <Image className={styles.header_image} src='/assets/landing_bg.jpg' layout="fill" objectFit="cover" alt="slika kuhinje sa stolicama, stolom, radnim delovima, policama, sudoperom, friziderom i sporetom"/>
      <div className={styles.wrapper}></div>
      <div className={styles.header_title}>
        <h1 className={styles.header_title_text}>izradjujemo namestaj po meri, vasoj zelji i ideji</h1>
        <p className={styles.header_description}>Veliki ili mali, mi mozemo da dizajniramo,
        rekonstruisemo ili jednostavno unapredimo</p>
      </div>
      
    </header>
  )
}

export default Header