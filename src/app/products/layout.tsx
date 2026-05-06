import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import '../product/product-page.css';

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
