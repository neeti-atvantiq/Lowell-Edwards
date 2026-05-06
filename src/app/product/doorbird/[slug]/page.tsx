import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DoorBirdProductPage from '@/components/pages/DoorBirdProductPage';
import { products } from '@/data/products';

const doorbirdSlugs = ['d101s-ip-station', 'd2101v-surface-station'];

export function generateStaticParams() {
  return doorbirdSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[`doorbird/${slug}`];
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} — Lowell Edwards Home Integration`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products[`doorbird/${slug}`];
  if (!product) notFound();
  return <DoorBirdProductPage product={product} />;
}
