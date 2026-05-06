import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ButterflyMXProductPage from '@/components/pages/ButterflyMXProductPage';
import { products } from '@/data/products';

const butterflySlugs = ['video-intercom-panel', 'access-control-reader', 'qr-code-intercom', 'front-desk-station'];

export function generateStaticParams() {
  return butterflySlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[`butterfly/${slug}`];
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} — Lowell Edwards Home Integration`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products[`butterfly/${slug}`];
  if (!product) notFound();
  return <ButterflyMXProductPage product={product} />;
}
