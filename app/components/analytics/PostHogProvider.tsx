'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

function PostHogPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && posthog.__loaded) {
      let url = window.location.origin + pathname
      const search = searchParams.toString()
      if (search) url += `?${search}`
      posthog.capture('$pageview', { $current_url: url })
    }
  }, [pathname, searchParams])

  return null
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://s.drawtab.app'

    if (!posthogKey || posthogKey.includes('placeholder') || posthogKey.includes('your_posthog_key')) {
      return
    }

    const isLocalhost =
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.endsWith('.local')

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false, // Captured manually by PostHogPageView
      capture_pageleave: true,
      autocapture: true,
      disable_session_recording: isLocalhost,
      session_recording: {
        maskAllInputs: true,
      },
      person_profiles: 'identified_only',
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  )
}

export default PostHogProvider
