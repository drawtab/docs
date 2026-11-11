'use client'

import { useTheme } from 'next-themes'
import { useEffect } from 'react'

/**
 * The docs UI is always light. The theme switcher in the sidebar only controls
 * code blocks: when it resolves to dark, <html> gets `code-dark`, which
 * globals.css uses to restyle <pre> blocks.
 */
export function CodeTheme() {
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    document.documentElement.classList.toggle('code-dark', resolvedTheme === 'dark')
  }, [resolvedTheme])
  return null
}

/** Runs before first paint so code blocks don't flash light when dark was chosen. */
export const CODE_THEME_INIT = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('code-dark')}catch(e){}})()`
