import '../../../public/fonts/fonts.css';
import '../../styles/app.scss';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="body">
        <Header />
        <Breadcrumbs />
        <main className="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}