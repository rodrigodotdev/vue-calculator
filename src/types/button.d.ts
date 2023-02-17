export type ButtonType = "primary" | "secondary" | "tertiary" | "quaternary";

export type ButtonValue =
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

export type ButtonIcon =
  | null
  | "percent"
  | "divide"
  | "multiply"
  | "minus"
  | "plus"
  | "equals"
  | "plus-minus";

export type Button = {
  type: ButtonType;
  value: ButtonValue;
  icon: ButtonIcon;
};
