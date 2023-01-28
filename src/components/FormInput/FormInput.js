import { Group, FormInputLabel, StyledInput } from "./FormInputStyle";

const FormInput = ({ children, ...inputProps }) => {
  return (
    <Group>
      <StyledInput {...inputProps} required />
      <FormInputLabel shrink={inputProps.value.length}
      >
        {children}
      </FormInputLabel>
    </Group>
  );
};

export default FormInput;
