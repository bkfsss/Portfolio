/* global React */
const { SectionLabel, Card, Badge } = window.BahaSatgunPortfolioDesignSystem_d181b5;

const TAGS = ['film', 'photography', 'video games', 'machine learning', 'finance', 'sports', 'music'];

// InterestsSection — personal interests + the Letterboxd link.
// Repoint the href to your own Letterboxd account.
function InterestsSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <SectionLabel>interests</SectionLabel>
      <Card padding="var(--space-4)" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
          {TAGS.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
        <a href="https://letterboxd.com/bkfsss" target="_blank" rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
            textDecoration: 'none', fontFamily: 'var(--font-mono)', fontWeight: 300,
            fontSize: 'var(--size-md)', color: 'var(--paper-0)',
            borderTop: '1px solid var(--line-2)', paddingTop: 'var(--space-4)',
            transition: 'color var(--dur-normal) ease, text-shadow var(--dur-normal) ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-red)'; e.currentTarget.style.textShadow = 'var(--glow-red-text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--paper-0)'; e.currentTarget.style.textShadow = 'none'; }}>
          <span style={{ color: 'var(--accent-red)' }}>&#9656;</span>
          letterboxd
          <span style={{ color: 'var(--muted-2)', fontSize: 'var(--size-sm)' }}>/bkfsss</span>
          <span style={{ marginLeft: 'auto', color: 'var(--accent-red)' }}>&#8599;</span>
          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'var(--size-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--muted-1)' }}>
          Films I've watched and rated, dont be shy to add me !
        </p>
        </a>
        <a href="https://open.spotify.com/user/bahasatgun?si=a64189e9c6d3439a" target="_blank" rel="noreferrer"
          style={{
            display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
            textDecoration: 'none', fontFamily: 'var(--font-mono)', fontWeight: 300,
            fontSize: 'var(--size-md)', color: 'var(--paper-0)',
            borderTop: '1px solid var(--line-2)', paddingTop: 'var(--space-4)',
            transition: 'color var(--dur-normal) ease, text-shadow var(--dur-normal) ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent-red)'; e.currentTarget.style.textShadow = 'var(--glow-red-text)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--paper-0)'; e.currentTarget.style.textShadow = 'none'; }}>
          <span style={{ color: 'var(--accent-red)' }}>&#9656;</span>
          spotify
          <span style={{ color: 'var(--muted-2)', fontSize: 'var(--size-sm)' }}>/bkfsss</span>
          <span style={{ marginLeft: 'auto', color: 'var(--accent-red)' }}>&#8599;</span>
        </a>
        
      </Card>
    </section>
  );
}

window.InterestsSection = InterestsSection;
