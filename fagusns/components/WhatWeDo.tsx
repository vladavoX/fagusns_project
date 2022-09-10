import { NextComponentType } from "next";
import Image from "next/image";

import styles from "../styles/WhatWeDo.module.css";

const items = [
  {
    title: "kuhinje",
    imageSrc: "/assets/whatwedo/kuhinja.jpg",
    imageAlt: "kuhinja"
  },
  {
    title: "kupatila",
    imageSrc: "/assets/whatwedo/kupatilo.jpg",
    imageAlt: "kupatilo"
  },
  {
    title: "spavace sobe",
    imageSrc: "/assets/whatwedo/spavaca.jpg",
    imageAlt: "spavaca soba"
  },
  {
    title: "plakari",
    imageSrc: "/assets/whatwedo/plakar.jpg",
    imageAlt: "plakar"
  },
  {
    title: "poslovni prostori",
    imageSrc: "/assets/whatwedo/poslovni.jpg",
    imageAlt: "poslovni prostor"
  },
  {
    title: "dnevni boravak",
    imageSrc: "/assets/whatwedo/dnevni.jpg",
    imageAlt: "dnevni boravak"
  }
]

const WhatWeDo: NextComponentType = () => {
  return (
    <div className={styles.what_container} id="whatWeDo">
      <h1 className={styles.what_title}>sta radimo</h1>
      <div className={styles.what_grid}>
        {items.map((item, index) => (
          <div key={index} className={styles.what_item}>
            <Image className={styles.what_item_image} src={item.imageSrc} alt={item.imageAlt} layout="fill" objectFit="cover"/>
            <h2 className={styles.what_item_title}>{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeDo