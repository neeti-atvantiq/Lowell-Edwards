import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AkuvoxProductPage from '@/components/pages/AkuvoxProductPage';
import { products } from '@/data/products';

const akuvoxSlugs = ['x915-flagship-panel', 'x912-intercom-panel', 's532-body-temperature', 'a02s-indoor-phone', 'a08-access-controller', 'a01-access-controller', 's562-indoor-station', 'c313-indoor-monitor'];

export function generateStaticParams() {
  return akuvoxSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!akuvoxSlugs.includes(slug)) return {};
  const product = products[`akuvox/${slug}`];
  if (!product) return {};
  return {
    title: `${product.brand} ${product.model} — Lowell Edwards Home Integration`,
    description: product.description,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!akuvoxSlugs.includes(slug)) notFound();
  const product = products[`akuvox/${slug}`];
  if (!product) notFound();
  return <AkuvoxProductPage product={product} />;
}
