import * as React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  /** @default 'outline' */
  variant?: 'outline' | 'solid' | 'muted';
  style?: React.CSSProperties;
}

/**
 * A small mono chip for tech tags, statuses, and metadata.
 */
export function Badge(props: BadgeProps): JSX.Element;
