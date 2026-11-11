export default function NotFound() {
  return (
    <div className="notfound-wrap">
      <svg viewBox="0 0 200 200" width="180" height="180" style={{ marginBottom: '1rem' }}>
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#dfdcd2"
          strokeWidth="2"
          strokeDasharray="5,5"
          className="notfound-spin"
        />

        <g transform="translate(70, 60)">
          <rect x="0" y="0" width="40" height="50" rx="4" fill="#fdfcf9" stroke="#cbc7ba" strokeWidth="2" />
          <polygon points="40,0 40,15 55,15" fill="#fdfcf9" stroke="#cbc7ba" strokeWidth="2" />
          <line x1="8" y1="20" x2="32" y2="20" stroke="#96968c" strokeWidth="2" />
          <line x1="8" y1="28" x2="25" y2="28" stroke="#96968c" strokeWidth="2" />
          <line x1="8" y1="36" x2="30" y2="36" stroke="#96968c" strokeWidth="2" />

          <g className="notfound-pulse">
            <line x1="5" y1="10" x2="35" y2="40" stroke="#3f6fe0" strokeWidth="3" strokeLinecap="round" />
            <line x1="35" y1="10" x2="5" y2="40" stroke="#3f6fe0" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>
      </svg>

      <h1 className="notfound-heading">
        4<span>0</span>4
      </h1>
      <p className="notfound-subheading">Oops! Page not found</p>
      <p className="notfound-text">
        The page you&apos;re looking for seems to have gone missing. It might have been moved, deleted, or you
        entered the wrong URL.
      </p>

      <div className="notfound-actions">
        <a href="/" className="notfound-btn-primary">
          Go to Introduction
        </a>
        <a href="/quickstart" className="notfound-btn-secondary">
          Quickstart
        </a>
        <a href="/api-reference/render" className="notfound-btn-secondary">
          API Reference
        </a>
      </div>
    </div>
  )
}
