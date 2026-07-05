import * as React from 'react';

export interface ProjectCardProps {
  /** Two-digit index, e.g. "01". */
  index?: string;
  title: string;
  /** One-line serif description. */
  blurb?: string;
  /** Tech tags rendered as Badges. */
  tags?: string[];
  /** Opens in a new tab when set (makes the card interactive). */
  href?: string;
  style?: React.CSSProperties;
}

/**
 * A composed project entry (index · title · blurb · tech tags), built on Card + Badge.
 * @startingPoint section="Content" subtitle="Project entry with title, blurb and tags" viewport="700x180"
 */
export function ProjectCard(props: ProjectCardProps): JSX.Element;
