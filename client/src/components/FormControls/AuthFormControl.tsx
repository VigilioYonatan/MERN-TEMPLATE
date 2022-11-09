import { Controller, Control } from "react-hook-form";
import { FormControlsProps } from "~/utils/forms/formTypes";
type FormControlProps<T extends object> = {
    control: Control<T, any>;
};
const FormControl = <T extends object>(
    props: FormControlProps<T> & FormControlsProps<T>
) => {
    const { control, name, type = "text", title, placeholder, rules } = props;
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ fieldState: { error }, field }) => {
                const id = title.split(" ").join("");
                const props = {
                    ...field,
                    value: field.value || "",
                    type,
                    placeholder,
                    id,
                };

                return (
                    <div className="">
                        <label htmlFor={id}>{title}</label>
                        <input {...props} />
                        {error && error.message ? <p>{error.message}</p> : null}
                    </div>
                );
            }}
        />
    );
};

export default FormControl;
