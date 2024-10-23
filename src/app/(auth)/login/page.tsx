import styles from "./../auth.module.scss";
import Image from 'next/image'
import Input from "ui/inputs/Input/Input";
import Button from "ui/buttons/Button/Button"
import Link from "next/link";

const PageLogin = () => {
  return (
    <div className={styles.page}>

      <div className={styles.block}>
        <div className={styles.block__heading}>
          <Image
            className={styles.block__logo}
            src="/img/logo/logo.svg"
            alt="logo"
            width={48}
            height={48}
          />
          <div className={styles.block__title}>Добро пожаловать!</div>
          <div className={styles.block__subtitle}>Введите свои данные</div>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.form__rom}>
            <Input
              type="email"
              label="Email"
              placeholder="Адрес электронной почты"
            />
            <Input
              type="Password"
              label="Password"
              placeholder="Ваш пароль"
            />
          </div>
          <Button
            type="primary"
            size="md"
            htmlElement="button"
            buttonType="button"
            allowFullScreen="full-width"
          >
            Войти
          </Button>
        </form>
        <p className={styles.block__link}>У вас нет учетной записи? <Link href="register">Регистрация</Link></p>
        <p className={styles.block__link}><Link href="reset-password">Забыли пароль</Link></p>
      </div>

    </div>
  );
};

export default PageLogin;		
