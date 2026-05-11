import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BrandCategoryPage from '@/components/pages/BrandCategoryPage';
import { categories } from '@/data/products';

const validRoutes = [
  { brand: 'akuvox', category: 'intercoms' },
  { brand: 'akuvox', category: 'access-control' },
  { brand: 'akuvox', category: 'apartment-stations' },
  { brand: 'akuvox', category: 'software' },
  { brand: 'butterflymx', category: 'intercoms' },
  { brand: 'butterflymx', category: 'access-control' },
  { brand: 'doorbird', category: 'intercoms' },
  { brand: 'doorbird', category: 'access-control' },
  { brand: 'doorbird', category: 'apartment-stations' },
  { brand: 'doorbird', category: 'software' },
];

export function generateStaticParams() {
  return validRoutes.map((r) => ({ brand: r.brand, category: r.category }));
}

type Props = { params: Promise<{ brand: string; category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand, category } = await params;
  const key = `${brand}/${category}`;
  const cat = categories[key];
  if (!cat) return {};
  return {
    title: `${cat.title} — Lowell Edwards Home Integration`,
    description: cat.description,
  };
}

export default async function Page({ params }: Props) {
  const { brand, category } = await params;
  const key = `${brand}/${category}`;
  const cat = categories[key];
  if (!cat) notFound();
  return <BrandCategoryPage category={cat} />;
}
