import React from 'react';

/**
 * IconButton — a square, borderless control for a single icon or glyph.
 * Fades from muted to white on hover (the brand's link behaviour).
 * Pass an <img> (icon asset) or glyph as children.
 */
export function IconButton({
  children,
  size = 36,
  label,          // accessible label
  href,
  onClick,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    padding: 0,
    background: 'transparent',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-0)',
    color: 'var(--muted-1)',
    cursor: 'pointer',
    transition: 'color var(--dur-normal) ease, border-color var(--dur-normal) ease, opacity var(--dur-normal) ease',
    textDecoration: 'none',
    ...style,
  };

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      aria-label={label}
      title={label}
      style={base}
      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--paper-0)'; e.currentTarget.style.borderColor = 'var(--line-1)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--muted-1)'; e.currentTarget.style.borderColor = 'transparent'; }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
