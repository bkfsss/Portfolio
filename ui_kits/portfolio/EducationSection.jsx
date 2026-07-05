/* global React */
const { SectionLabel } = window.BahaSatgunPortfolioDesignSystem_d181b5;

// EducationSection — the UQAM row, faithful to the source EducationBox.
function EducationSection() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
      <SectionLabel>education</SectionLabel>
      <a href="https://uqam.ca/" target="_blank" rel="noreferrer"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', textDecoration: 'none', color: 'var(--paper-0)', transition: 'color var(--dur-normal) ease' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--muted-2)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--paper-0)'; }}>
        <img src="../../assets/logo_uqam.jpg" alt="UQAM" style={{ width: 58, height: 34, objectFit: 'contain', borderRadius: 'var(--radius-3)' }} />
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-md)' }}>SWE @ UQAM</span>
      </a>
    </section>
  );
}

window.EducationSection = EducationSection;
