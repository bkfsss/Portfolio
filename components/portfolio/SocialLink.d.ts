import * as React from 'react';

export interface SocialLinkProps {
  href: string;
  /** Accessible label + optional visible text. */
  label?: string;
  /** src for the icon asset. */
  icon?: string;
  /** Icon edge in px. @default 20 */
  iconSize?: number;
  /** Show the label text next to the icon. @default false */
  showLabel?: boolean;
  style?: React.CSSProperties;
}

/**
 * An icon link for the footer social row; dims to muted and lifts to white on hover.
 */
export function SocialLink(props: SocialLinkProps): JSX.Element;
