import React from 'react';

/**
 * Button — the brand's action primitive.
 * Mono type, lowercase label, sharp corners. On black.
 */
export function Button({
  children,
  variant = 'outline',   // 'solid' | 'outline' | 'ghost'
  size = 'md',           // 'sm' | 'md'
  disabled = false,
  href,
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { padding: '6px 12px', fontSize: 'var(--size-xs)' },
    md: { padding: '9px 18px', fontSize: 'var(--size-sm)' },
  };

  const variants = {
    solid: {
      background: 'var(--paper-0)',
      color: 'var(--ink-0)',
      border: '1px solid var(--paper-0)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--paper-0)',
      border: '1px solid var(--line-3)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--muted-1)',
      border: '1px solid transparent',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    letterSpacing: '0.02em',
    lineHeight: 1,
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'color var(--dur-normal) ease, background var(--dur-normal) ease, border-color var(--dur-normal) ease, box-shadow var(--dur-normal) ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const hoverIn = (e) => {
    if (disabled) return;
    if (variant === 'solid') { e.currentTarget.style.background = 'var(--paper-1)'; e.currentTarget.style.boxShadow = 'var(--glow-red-sm)'; }
    else if (variant === 'outline') { e.currentTarget.style.borderColor = 'var(--accent-red)'; e.currentTarget.style.color = 'var(--accent-red)'; e.currentTarget.style.boxShadow = 'var(--glow-red-sm)'; }
    else { e.currentTarget.style.color = 'var(--accent-red)'; }
  };
  const hoverOut = (e) => {
    Object.assign(e.currentTarget.style, variants[variant]);
    e.currentTarget.style.boxShadow = 'none';
  };

  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={href ? undefined : disabled}
      style={base}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      {...rest}
    >
      {children}
    </Tag>
  );
}
