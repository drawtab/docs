const REQUEST = [
  'POST https://core.drawtab.app/api/v1/render',
  'Authorization: Bearer dt_live_YOUR_KEY',
  '',
  '{',
  '  "templateId": "YOUR_TEMPLATE_ID",',
  '  "variables": { "name": "Sarah Chen" },',
  '  "format": "png"',
  '}',
].join('\n')

export function HeroCode() {
  return (
    <pre className="docs-hero-code" aria-label="Example request">
      <code>{REQUEST}</code>
    </pre>
  )
}
