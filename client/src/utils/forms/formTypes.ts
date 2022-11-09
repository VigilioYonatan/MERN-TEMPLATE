import { InputHTMLAttributes } from "react";
import { Path, RegisterOptions } from "react-hook-form";

type FormControlsProps<T extends object> = {
    name: Path<T>;
    type?: InputHTMLAttributes<HTMLInputElement>["type"];
    title: string;
    placeholder: string;
    rules: RegisterOptions;
};
type FormControlsCustom<T extends object> = {
    [a in keyof T]: FormControlsProps<T>;
};

export { type FormControlsProps, type FormControlsCustom };
