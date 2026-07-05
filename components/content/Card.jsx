import React from 'react';

/**
 * Card — a dark elevated surface with a hairline border.
 * Square corners by default; brightens its border on hover when interactive.
 */
export function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  style,
  ...rest
}) {
  const base = {
    background: 'var(--bg-surface)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-0)',
    padding,
    color: 'var(--text-primary)',
    transition: 'border-color var(--dur-normal) ease, background var(--dur-normal) ease, box-shadow var(--dur-normal) ease',
    cursor: interactive ? 'pointer' : 'default',
    ...style,
  };
  const enter = (e) => {
    if (!interactive) return;
    e.currentTarget.style.borderColor = 'var(--accent-red)';
    e.currentTarget.style.background = 'var(--bg-hover)';
    e.currentTarget.style.boxShadow = 'var(--glow-red-sm)';
  };
  const leave = (e) => {
    if (!interactive) return;
    e.currentTarget.style.borderColor = 'var(--border-default)';
    e.currentTarget.style.background = 'var(--bg-surface)';
    e.currentTarget.style.boxShadow = 'none';
  };
  return (
    <div style={base} onMouseEnter={enter} onMouseLeave={leave} {...rest}>
      {children}
    </div>
  );
}
