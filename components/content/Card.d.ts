import * as React from 'react';

export interface CardProps {
  children?: React.ReactNode;
  /** Brightens border + surface on hover. @default false */
  interactive?: boolean;
  /** CSS padding value. @default var(--space-5) */
  padding?: string;
  style?: React.CSSProperties;
}

/**
 * A dark elevated surface with a hairline border and square corners.
 */
export function Card(props: CardProps): JSX.Element;
