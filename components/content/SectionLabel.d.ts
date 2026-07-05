import * as React from 'react';

export interface SectionLabelProps {
  /** The label text — keep it lowercase. */
  children?: React.ReactNode;
  /** Optional two-digit index rendered before the label, e.g. "01". */
  index?: string;
  /** @default 'center' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/**
 * The brand's signature section header: a lowercase mono word (optionally numbered).
 * @startingPoint section="Content" subtitle="Signature lowercase mono section header" viewport="700x120"
 */
export function SectionLabel(props: SectionLabelProps): JSX.Element;
