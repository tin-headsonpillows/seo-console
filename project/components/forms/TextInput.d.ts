import * as React from "react";

/**
 * 40px text field — white fill, 1px hairline border, 8px radius, 10 × 14 padding.
 * On focus the border shifts to ink (#111111); no ring, no glow.
 */
export interface TextInputProps {
  label?: string;
  /** Fine-print helper under the field, muted-soft. */
  hint?: string;
  /** Error message; also turns the border and message red. */
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Leading glyph inside the field — use `Icon` at size 16. */
  iconLeft?: React.ReactNode;
  id?: string;
  name?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export declare function TextInput(props: TextInputProps): JSX.Element;
