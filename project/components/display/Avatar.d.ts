import * as React from "react";

/** A 36px circular avatar — photo or a pastel-fill initials placeholder. Avatars are the only place badge pastels appear. */
export interface AvatarProps {
  src?: string;
  alt?: string;
  /** Shown when no `src` is given. */
  initials?: string;
  fill?: "neutral" | "orange" | "pink" | "violet" | "emerald";
  size?: number;
  style?: React.CSSProperties;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
