import * as React from 'react';

export interface IconButtonProps {
  /** An <img> icon asset or a glyph. */
  children?: React.ReactNode;
  /** Square edge length in px. @default 36 */
  size?: number;
  /** Accessible label (also the tooltip). */
  label?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/**
 * A square, borderless control for a single icon; fades muted → white on hover.
 */
export function IconButton(props: IconButtonProps): JSX.Element;
