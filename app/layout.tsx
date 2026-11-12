import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { inter, bricolage } from './fonts'
import { CODE_THEME_INIT, CodeTheme } from './components/CodeTheme'
import { DocsFooter } from './components/DocsFooter'
import { PostHogProvider } from './components/analytics/PostHogProvider'
import 'nextra-theme-docs/style.css'
import './globals.css'

const DOCS_URL = 'https://docs.drawtab.app'
const DOCS_DESCRIPTION =
  'Official Drawtab API documentation: authenticate, render images from templates or a custom canvas, and handle webhooks, credits and rate limits.'

export const metadata = {
  metadataBase: new URL(DOCS_URL),
  title: {
    default: 'Drawtab API Docs',
    template: '%s | Drawtab Docs',
  },
  description: DOCS_DESCRIPTION,
  // Each page is its own canonical URL; "./" resolves against the current path.
  alternates: { canonical: './' },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    siteName: 'Drawtab Docs',
    locale: 'en_US',
    title: 'Drawtab API Docs',
    description: DOCS_DESCRIPTION,
    images: [{ url: '/og/docs.png', width: 1200, height: 630, alt: 'Drawtab API docs', type: 'image/png' }],
  },
  twitter: {
    card: 'summary_large_image' as const,
    site: '@usedrawtab',
    title: 'Drawtab API Docs',
    description: DOCS_DESCRIPTION,
    images: [{ url: '/og/docs.png', alt: 'Drawtab API docs' }],
  },
}

const navbar = (
  <Navbar
    logo={
      <Image src="/logo.svg" alt="Drawtab" width={135} height={30} priority className="site-logo" />
    }
    logoLink="/"
  >
    <a className="nav-link" href="https://drawtab.app" target="_blank" rel="noreferrer">
      drawtab.app
    </a>
    <a className="nav-cta" href="https://workspace.drawtab.app" target="_blank" rel="noreferrer">
      Dashboard
    </a>
  </Navbar>
)

const footer = (
  <Footer>
    <DocsFooter />
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${bricolage.variable}`}>
      <Head
        color={{
          hue: 222,
          saturation: 72,
          lightness: 56,
        }}
        backgroundColor={{ light: '#f5f3ee', dark: '#f5f3ee' }}
      />
      <body>
        <script dangerouslySetInnerHTML={{ __html: CODE_THEME_INIT }} />
        <PostHogProvider>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            editLink={null}
            copyPageButton={false}
            feedback={{
              content: 'Question or feedback? Email us',
              link: 'mailto:hello@drawtab.app?subject=Drawtab%20docs%20feedback',
            }}
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            footer={footer}
            nextThemes={{ defaultTheme: 'light', forcedTheme: 'light' }}
            themeSwitch={{ light: 'Light code', dark: 'Dark code', system: 'System code' }}
          >
            <CodeTheme />
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  )
}
