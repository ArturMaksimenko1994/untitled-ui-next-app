import Link from "next/link";

const PageHome = () => {
  return (
    <>
      <h1 className="h1">Главная страница</h1>
      <Link href="/dashboard">
        страница dashboard
      </Link>
    </>
  );
};

export default PageHome;