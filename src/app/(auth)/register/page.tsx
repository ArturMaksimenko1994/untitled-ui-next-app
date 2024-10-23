import styles from "./../auth.module.scss";
import Image from 'next/image'
import Input from "ui/inputs/Input/Input";
import Button from "ui/buttons/Button/Button"
import Link from "next/link";

const PageRegister = () => {
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
          <div className={styles.block__title}>Создать учетную запись</div>
          <div className={styles.block__subtitle}>Введите Email</div>
        </div>

        <form action="" className={styles.form}>
          <div className={styles.form__rom}>
            <Input
              type="email"
              label="Email"
              placeholder="Адрес электронной почты"
            />
          </div>
          <Button
            type="primary"
            size="md"
            htmlElement="button"
            buttonType="button"
            allowFullScreen="full-width"
          >
            Зарегистрироваться
          </Button>
        </form>
        <p className={styles.block__link}>У вас уже есть учетная запись? <Link href="login">Войти</Link></p>
      </div>
    </div>
  );
};

export default PageRegister;