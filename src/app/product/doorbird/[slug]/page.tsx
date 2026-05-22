import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DoorBirdProductPage from '@/components/pages/DoorBirdProductPage';
import { products } from '@/data/products';

const doorbirdSlugs = ['d31tdh-display', 'a1121-access-controller', 'a1101-indoor-station'];

export function generateStaticParams() {
  return doorbirdSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!doorbirdSlugs.includes(slug)) return {};
  const product = products[`doorbird/${slug}`];
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} — Lowell Edwards Home Integration`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!doorbirdSlugs.includes(slug)) notFound();
  const product = products[`doorbird/${slug}`];
  if (!product) notFound();
  return <DoorBirdProductPage product={product} />;
}
