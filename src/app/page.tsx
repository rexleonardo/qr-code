import React from "react";
import Image from "next/image";

import styles from "./page.module.scss";

import qrCode from "../../public/images/image-qr-code.png";

const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Image src={qrCode} className={styles.image} alt={""} />
      <div className={styles.title}>
        Improve your front-end skills by building projects
      </div>
      <div className={styles.subtitle}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </main>
  );
};

export default Home;
