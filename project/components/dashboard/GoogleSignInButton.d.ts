import * as React from "react";

/** The standard "Continue with Google" OAuth button — the multicolor G mark is Google's official sign-in icon, copied verbatim from the app's own sign-in screen. */
export interface GoogleSignInButtonProps {
  label?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export declare function GoogleSignInButton(props: GoogleSignInButtonProps): JSX.Element;
