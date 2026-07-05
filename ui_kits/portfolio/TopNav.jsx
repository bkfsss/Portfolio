/* global React */
const { Button } = window.BahaSatgunPortfolioDesignSystem_d181b5;

// TopNav — a slim HUD-style header bar. Left: a crimson status dot + mono
// wordmark. Right: the Gallery + Resume buttons.
// Drop your resume at ui_kits/portfolio/resume.pdf (or repoint the href).
function TopNav() {
  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'var(--space-5) 0 var(--space-4)',
      borderBottom: '1px solid var(--line-2)',
    }}>
      <a href="index.html" style={{
        display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
        fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'var(--size-sm)',
        color: 'var(--paper-0)', textDecoration: 'none', letterSpacing: '0.02em',
        transition: 'color var(--dur-normal) ease',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-red)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--paper-0)'; }}>
        Portfolio
      </a>
      <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
        <Button href="photography.html" variant="outline" size="sm">photo gallery</Button>
        <Button href="resume.pdf" variant="outline" size="sm" target="_blank" rel="noreferrer">resume</Button>
      <Button href="mailto:bahasatgun1@gmail.com" variant="outline" size="sm" target="_blank">contact</Button>
      </div>
    </nav>
  );
}

window.TopNav = TopNav;
