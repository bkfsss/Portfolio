/* global React */
const { SocialLink, Divider } = window.BahaSatgunPortfolioDesignSystem_d181b5;

// Footer — the social row, faithful to the source footer.
function Footer() {
  return (
    <footer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)', paddingBottom: 'var(--space-9)' }}>
      <div style={{ width: '100%' }}><Divider /></div>
      <div style={{ display: 'flex', gap: 'var(--space-5)', alignItems: 'center' }}>
        <SocialLink href="https://www.linkedin.com/in/baha-satgun-31600a2b8/" label="LinkedIn" icon="../../assets/linkedin-square-icon.png" iconSize={18} />
        <SocialLink href="https://github.com/bkfsss" label="GitHub" icon="../../assets/icons8-github-50.png" iconSize={20} />
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--muted-3)' }}>© 2026 Baha Satgun</div>
    </footer>
  );
}

window.Footer = Footer;
