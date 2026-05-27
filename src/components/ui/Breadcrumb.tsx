import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="pp-breadcrumb">
      <div className="wrap">
        <div className="pp-breadcrumb-inner">
          <Link href="/">Home</Link>
          {items.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M1 1l4 4-4 4" />
              </svg>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="pp-breadcrumb-current">{item.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
