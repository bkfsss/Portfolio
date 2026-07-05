import * as React from 'react';

export interface DividerProps {
  /** Optional lowercase label centered on the rule. */
  label?: string;
  /** Render a vertical hairline instead. @default false */
  vertical?: boolean;
  style?: React.CSSProperties;
}

/**
 * A hairline rule; optionally with a small mono label centered on the line.
 */
export function Divider(props: DividerProps): JSX.Element;
