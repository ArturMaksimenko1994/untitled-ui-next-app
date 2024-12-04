import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer__top}>
        <div className="container container--xxl">

        </div>
      </div>

      <div className={styles.footer__center}>
        <div className="container container--xxl">
          <Link href="/">
            <Image
              className={styles.footer__logo}
              src="/img/logo/Logo-dark.svg"
              alt="logo"
              width={142}
              height={32}
            />
          </Link>
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <div className="container container--xxl">

        </div>
      </div>
    </footer>
  );
};

export default Footer;