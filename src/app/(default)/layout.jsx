import Footer from '@/layout/Footer';
import Header from '@/layout/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </>
  );
}
