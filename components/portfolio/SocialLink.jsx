import React from 'react';

/**
 * SocialLink — an icon link for the footer social row.
 * Derived from the source's LinkedIn / GitHub footer icons.
 * The icon dims to muted and charges to crimson on hover.
 */
export function SocialLink({
  href,
  label,
  icon,          // src for an <img> icon asset
  iconSize = 20,
  showLabel = false,
  style,
  ...rest
}) {
  const wrap = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--space-2)',
    color: 'var(--muted-1)',
    textDecoration: 'none',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-light)',
    fontSize: 'var(--size-xs)',
    transition: 'color var(--dur-normal) ease, opacity var(--dur-normal) ease, filter var(--dur-normal) ease',
    opacity: 0.7,
    ...style,
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      style={wrap}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'var(--accent-red)'; e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(255,36,80,0.55))'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.7; e.currentTarget.style.color = 'var(--muted-1)'; e.currentTarget.style.filter = 'none'; }}
      {...rest}
    >
      {icon && <img src={icon} alt="" width={iconSize} height={iconSize} style={{ display: 'block', objectFit: 'contain' }} />}
      {showLabel && <span>{label}</span>}
    </a>
  );
}
