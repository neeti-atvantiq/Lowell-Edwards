import AllProductsPage from '@/components/pages/AllProductsPage';
import Breadcrumb from '@/components/ui/Breadcrumb';

export const metadata = {
  title: 'All Products — ButterflyMX, Akuvox & DoorBird · Lowell Edwards Home Integration',
  description: 'Browse every ButterflyMX, Akuvox, and DoorBird product we supply and install. Filter by brand, view specifications, request a quote.',
};

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Products' }]} />
      <AllProductsPage />
    </>
  );
}
