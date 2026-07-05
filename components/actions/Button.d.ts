import * as React from 'react';

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual weight. @default 'outline' */
  variant?: 'solid' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md';
  disabled?: boolean;
  /** Render as an anchor when set. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * The brand's action primitive: lowercase mono label, sharp corners, on black.
 * @startingPoint section="Actions" subtitle="Mono button, solid / outline / ghost" viewport="700x140"
 */
export function Button(props: ButtonProps): JSX.Element;
