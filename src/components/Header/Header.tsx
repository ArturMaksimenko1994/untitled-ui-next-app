
import styles from "./Header.module.scss";
import Image from 'next/image'
import Button from "ui/buttons/Button/Button";
import Link from "next/link";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className="container container--xxl">
        <div className={styles.header__row}>
          <Link href="/">
            <Image
              className={styles.header__logo}
              src="/img/logo/Logo-dark.svg"
              alt="logo"
              width={142}
              height={32}
            />
          </Link>
          <nav className={styles.header__nav}>
            <Link href="/">Главная</Link>
            <Link href="/dashboard">Профиль</Link>
            <Link href="/blog">Блог</Link>
          </nav>

          <div className={styles.header__aut}>
            <Button
              type="secondary"
              htmlElement="link"
              link="login"
              size="md"
            >
              Log in
            </Button>

            <Button
              type="primary"
              htmlElement="link"
              link="register"
              size="sm"
            >
              Sign up
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;