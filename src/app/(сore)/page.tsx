import Link from "next/link";
import styles from "./page.module.scss";

const PageHome = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <h1 className="h1">Главная страница</h1>
          <Link href="/dashboard">
            страница dashboard
          </Link>
        </div>
      </section>
    </>
  );
};

export default PageHome;