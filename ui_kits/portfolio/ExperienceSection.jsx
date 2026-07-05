/* global React */
const { SectionLabel, Card, Badge, Divider } = window.BahaSatgunPortfolioDesignSystem_d181b5;

const ITEMS = [
  { role: 'teaching assistant', org: 'uqam · intro to programming', period: '2025 — now',
    note: 'Grading, lab hours, and gently un-breaking first-year loops.' },
  { role: 'freelance web dev', org: 'various small clients', period: '2024 — 2025',
    note: 'Static sites, a booking form, one very stubborn calendar widget.' },
];

// ExperienceSection — fills the source's empty "experience" scaffold
// with a stacked list of roles.
function ExperienceSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
      <SectionLabel>experience</SectionLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {ITEMS.map((it, i) => (
          <Card key={i} padding="var(--space-4)">
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'var(--size-md)', color: 'var(--paper-0)' }}>{it.role}</span>
              <span style={{ flex: 1 }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--size-2xs)', color: 'var(--muted-2)' }}>{it.period}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--size-xs)', color: 'var(--muted-2)', marginTop: '4px' }}>{it.org}</div>
            <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'var(--size-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--muted-1)' }}>{it.note}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

window.ExperienceSection = ExperienceSection;
