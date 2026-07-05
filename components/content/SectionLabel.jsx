import React from 'react';

/**
 * SectionLabel — the brand's signature section header.
 * A lowercase mono word, optionally numbered, sitting above content.
 * Derived directly from the source's "education / experience / projects"
 * <tt> labels.
 */
export function SectionLabel({
  children,
  index,          // optional two-digit index, e.g. "01"
  align = 'center',   // 'left' | 'center'
  style,
  ...rest
}) {
  const wrap = {
    display: 'flex',
    alignItems: 'baseline',
    gap: 'var(--space-3)',
    justifyContent: align === 'center' ? 'center' : 'flex-start',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-sm)',
    color: 'var(--text-primary)',
    letterSpacing: '0.02em',
    ...style,
  };
  const num = {
    fontSize: 'var(--size-2xs)',
    color: 'var(--muted-2)',
  };
  return (
    <div style={wrap} {...rest}>
      {index != null && <span style={num}>{index}</span>}
      <span>{children}</span>
    </div>
  );
}
