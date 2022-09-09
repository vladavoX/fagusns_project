import type { NextComponentType } from "next";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

import styles from "../styles/Navbar.module.css";

const Navbar: NextComponentType = () => { 
  const [isPhoneSize, setIsPhoneSize] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // check if the screen is phone size
  useEffect(() => {
    if (window.innerWidth <= 860) {
      setIsPhoneSize(true);
    } else {
      setIsPhoneSize(false);
    }
  }, []);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <h1 className={styles.navbar_logo_text}>FAGUS NS
            {!isPhoneSize &&
              <span className={styles.navbar_logo_inner_text}> | PROIZVODNJA NAMESTAJA PO MERI</span>
            }
          </h1>
        </div>
        {/* Phone sized navbar */}
        {isPhoneSize &&
          <div>
            <div className={styles.navbar_menu_icon} onClick={toggleMenu}>
            {isMenuOpen ?
              <AiOutlineClose onClick={toggleMenu} className={styles.navbar_menu_icon} /> :
              <AiOutlineMenu onClick={toggleMenu} className={styles.navbar_menu_icon} />
            }
            </div>
            {isMenuOpen &&
              <div className={styles.navbar_menu}>
                <ul className={styles.navbar_menu_list}>
                  <li className={styles.navbar_menu_list_item}>
                    <Link href="#home" className={styles.navbar_menu_list_item_link}>pocetna</Link>
                  </li>
                  <li className={styles.navbar_menu_list_item}>
                    <Link href="#whatWeDo" className={styles.navbar_menu_list_item_link}>sta radimo</Link>
                  </li>
                  <li className={styles.navbar_menu_list_item}>
                    <Link href="ourWork" className={styles.navbar_menu_list_item_link}>nasi radovi</Link>
                  </li>
                  <li className={styles.navbar_menu_list_item}>
                    <Link href="contact" className={styles.navbar_menu_list_item_link}>kontakt</Link>
                  </li>
                </ul>
              </div>
            }
          </div>
        }
        {/* Desktop sized navbar */}
        {!isPhoneSize &&
          <div className={styles.navbar_links}>
            <ul className={styles.navbar_menu_list}>
              <li className={styles.navbar_menu_list_item}>
                <Link href="#home" className={styles.navbar_menu_list_item_link}>pocetna</Link>
              </li>
              <li className={styles.navbar_menu_list_item}>
                <Link href="#whatWeDo" className={styles.navbar_menu_list_item_link}>sta radimo</Link>
              </li>
              <li className={styles.navbar_menu_list_item}>
                <Link href="ourWork" className={styles.navbar_menu_list_item_link}>nasi radovi</Link>
              </li>
              <li className={styles.navbar_menu_list_item}>
                <Link href="contact" className={styles.navbar_menu_list_item_link}>kontakt</Link>
              </li>
            </ul>
          </div>
        }
      </nav>
    </div>
  )
}

export default Navbar;