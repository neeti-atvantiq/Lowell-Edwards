import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import './product-page.css';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
