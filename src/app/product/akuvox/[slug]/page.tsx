import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AkuvoxProductPage from '@/components/pages/AkuvoxProductPage';
import { products } from '@/data/products';

const akuvoxSlugs = ['r29-face-recognition', 'e16c-multi-tenant-station'];

export function generateStaticParams() {
  return akuvoxSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[`akuvox/${slug}`];
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} — Lowell Edwards Home Integration`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const product = products[`akuvox/${slug}`];
  if (!product) notFound();
  return <AkuvoxProductPage product={product} />;
}
