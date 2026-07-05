import React from 'react';
import { Card } from '../content/Card.jsx';
import { Badge } from '../content/Badge.jsx';

/**
 * ProjectCard — a composed project entry: index, title, blurb, tech tags.
 * Fills the empty "projects" section from the source. Built on Card + Badge.
 */
export function ProjectCard({
  index,          // "01"
  title,
  blurb,
  tags = [],
  href,
  style,
  ...rest
}) {
  return (
    <Card interactive={!!href} onClick={href ? () => window.open(href, '_blank') : undefined} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
        {index != null && (
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'var(--size-2xs)', color: 'var(--muted-2)' }}>{index}</span>
        )}
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 300, fontSize: 'var(--size-md)', color: 'var(--paper-0)', flex: 1 }}>{title}</span>
        <span style={{ color: 'var(--muted-2)', fontFamily: 'var(--font-mono)', fontSize: 'var(--size-sm)' }}>↗</span>
      </div>
      {blurb && (
        <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'var(--size-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--muted-1)' }}>{blurb}</p>
      )}
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-1)' }}>
          {tags.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>
      )}
    </Card>
  );
}
