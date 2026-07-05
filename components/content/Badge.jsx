import React from 'react';

/**
 * Badge — a small mono chip for tech tags, statuses, and metadata.
 */
export function Badge({
  children,
  variant = 'outline',   // 'outline' | 'solid' | 'muted'
  style,
  ...rest
}) {
  const variants = {
    outline: { background: 'transparent', color: 'var(--paper-1)', border: '1px solid var(--line-1)' },
    solid:   { background: 'var(--paper-0)', color: 'var(--ink-0)', border: '1px solid var(--paper-0)' },
    muted:   { background: 'var(--ink-3)', color: 'var(--muted-1)', border: '1px solid transparent' },
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-2xs)',
    letterSpacing: '0.04em',
    lineHeight: 1,
    padding: '4px 8px',
    borderRadius: 'var(--radius-0)',
    whiteSpace: 'nowrap',
    ...variants[variant],
    ...style,
  };
  return <span style={base} {...rest}>{children}</span>;
}
