import { InputHTMLAttributes } from "react";
import { ComponentBase } from "../types/component-base.type";

type TextareaType = "text" | "number" | "email" | "password";

export type TextareaProps = Omit<
  InputHTMLAttributes<HTMLTextAreaElement>,
  "size"
> &
  ComponentBase & {
    type?: TextareaType;
    label?: string;
  };
