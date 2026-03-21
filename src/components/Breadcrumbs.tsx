import Link from 'next/link'

export interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `https://www.mapleridgedev.com${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="bg-stone-900 border-t border-stone-800">
        <div className="container-wide section-padding py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-stone-400">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-stone-600">/</span>}
                {item.href ? (
                  <Link href={item.href} className="hover:text-ridge-400 transition-colors">
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-stone-300">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
