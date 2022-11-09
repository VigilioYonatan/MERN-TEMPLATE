import { RegisterOptions } from "react-hook-form";
type ValidationCustom<T extends object> = {
    [val in keyof T]: RegisterOptions;
};

export { type ValidationCustom };
