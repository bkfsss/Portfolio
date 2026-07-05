import React from 'react';

/**
 * Divider — a hairline rule. Horizontal by default; can carry a small
 * lowercase mono label centered on the line.
 */
export function Divider({
  label,
  vertical = false,
  style,
  ...rest
}) {
  if (vertical) {
    return <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--line-2)', ...style }} {...rest} />;
  }
  if (label) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>
        <span style={{ flex: 1, height: 1, background: 'var(--line-2)' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'var(--size-2xs)', color: 'var(--muted-2)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: 'var(--line-2)' }} />
      </div>
    );
  }
  return <div style={{ height: 1, background: 'var(--line-2)', width: '100%', ...style }} {...rest} />;
}
