import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { inter, bricolage } from './fonts'
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
  />
)

const footer = (
  <Footer>
    <span>
      © 2026 Drawtab by Digisept LTD ·{' '}
      <a href="https://drawtab.app" target="_blank" rel="noreferrer">
        drawtab.app
      </a>{' '}
      ·{' '}
      <a href="https://workspace.drawtab.app" target="_blank" rel="noreferrer">
        Dashboard
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className={`${inter.variable} ${bricolage.variable}`}>
      <Head />
      <body>
        <PostHogProvider>
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/drawtab/drawtab-docs"
            editLink="Edit this page on GitHub"
            sidebar={{ defaultMenuCollapseLevel: 1 }}
            footer={footer}
          >
            {children}
          </Layout>
        </PostHogProvider>
      </body>
    </html>
  )
}
