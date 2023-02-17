export type IButtonType = "primary" | "secondary" | "tertiary" | "quaternary";

export type IButtonValue =
  | "CE"
  | "C"
  | "%"
  | "/"
  | "1"
  | "2"
  | "3"
  | "*"
  | "4"
  | "5"
  | "6"
  | "+"
  | "7"
  | "8"
  | "9"
  | "-"
  | "+/-"
  | "0"
  | ","
  | "=";

export type IButtonIcon =
  | null
  | "percent"
  | "divide"
  | "multiply"
  | "minus"
  | "plus"
  | "equals"
  | "plus-minus";

export interface IButton {
  type: IButtonType;
  value: IButtonValue;
  icon: IButtonIcon;
}
