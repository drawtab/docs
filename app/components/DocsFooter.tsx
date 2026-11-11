import Image from 'next/image'

type FooterLink = { label: string; href: string; external?: boolean }

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Docs',
    links: [
      { label: 'Quickstart', href: '/quickstart' },
      { label: 'Authentication', href: '/authentication' },
      { label: 'API Reference', href: '/api-reference/render' },
      { label: 'SDKs & Examples', href: '/sdks-examples' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'Dashboard', href: 'https://workspace.drawtab.app', external: true },
      { label: 'Pricing', href: 'https://drawtab.app/#pricing', external: true },
      { label: 'Integrations', href: 'https://drawtab.app/integrations', external: true },
      { label: 'Developer hub', href: 'https://drawtab.app/developers', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'drawtab.app', href: 'https://drawtab.app', external: true },
      { label: 'Blog', href: 'https://drawtab.app/blog', external: true },
      { label: 'Contact', href: 'mailto:hello@drawtab.app' },
      { label: 'Digisept LTD', href: 'https://digisept.com', external: true },
    ],
  },
]

export function DocsFooter() {
  return (
    <div className="docs-footer">
      <div className="docs-footer-grid">
        <div className="docs-footer-brand">
          <Image src="/logo.svg" alt="Drawtab" width={108} height={24} className="site-logo" />
          <p>Programmatic creative automation at scale.</p>
          <a href="mailto:hello@drawtab.app">hello@drawtab.app</a>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h4>{column.title}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <p className="docs-footer-legal">
        © 2026{' '}
        <a href="https://digisept.com" target="_blank" rel="noreferrer">
          Digisept LTD
        </a>
        . Drawtab is a product of Digisept LTD. All rights reserved.{' '}
        <a href="https://drawtab.app/policy/privacy" target="_blank" rel="noreferrer">
          Privacy
        </a>{' '}
        ·{' '}
        <a href="https://drawtab.app/policy/terms" target="_blank" rel="noreferrer">
          Terms
        </a>
      </p>
    </div>
  )
}
