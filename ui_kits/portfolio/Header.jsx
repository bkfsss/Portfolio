/* global React */
const { SectionLabel } = window.BahaSatgunPortfolioDesignSystem_d181b5;

// Header — the name block. Matches the source: centered mono name,
// UQAM education row, serif tagline.
function Header() {
  return (
    <header style={{ textAlign: 'center', paddingTop: 'var(--space-6)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
      <h1 style={{ margin: 0, font: 'var(--text-name)', fontSize: 'var(--size-lg)', color: 'var(--paper-0)', letterSpacing: '0.02em', textShadow: '0 0 14px rgba(255,36,80,0.45)' }}>Baha Satgun</h1>
      <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'var(--size-md)', color: 'var(--muted-1)', maxWidth: '42ch', lineHeight: 'var(--leading-normal)' }}>
        Software engineering student. I write code, take photographs, passionate about ML, Finance, AI and anything creative
      </p>
    </header>
  );
}

window.Header = Header;
