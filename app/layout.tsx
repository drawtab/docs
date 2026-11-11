import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { inter, bricolage } from './fonts'
import { DocsFooter } from './components/DocsFooter'
import { PostHogProvider } from './components/analytics/PostHogProvider'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  title: {
    default: 'Drawtab Docs',
    template: '%s — Drawtab Docs',
  },
  description:
    'Official API documentation for Drawtab — generate dynamic images and graphics on demand via a simple REST API.',
  icons: {
    icon: '/favicon.svg',
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
          hue: { light: 222, dark: 222 },
          saturation: { light: 72, dark: 80 },
          lightness: { light: 56, dark: 66 },
        }}
        backgroundColor={{ light: '#f5f3ee', dark: '#13251f' }}
      />
      <body>
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
            nextThemes={{ defaultTheme: 'light' }}
          >
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  )
}
