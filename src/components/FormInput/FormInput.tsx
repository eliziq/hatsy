import { InputHTMLAttributes, FC } from "react";
import { Group, FormInputLabel, StyledInput } from "./FormInputStyle";

type FormInputProps = {};

const FormInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  children,
  ...inputProps
}) => {
  return (
    <Group>
      <StyledInput {...inputProps} required />
      <FormInputLabel
        shrink={Boolean(
          inputProps.value &&
            typeof inputProps.value === "string" &&
            inputProps.value.length
        )}
      >
        {children}
      </FormInputLabel>
    </Group>
  );
};

export default FormInput;
