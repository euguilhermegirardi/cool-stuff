import { useState } from 'react';
import { PasswordInputContainerProps } from './interfaces/passwordInputContainerProps';
import PasswordInput from './passwordInput';

const PasswordInputContainer = ({
  inputId,
  inputName,
  autoFocus,
  formErrors,
  register,
}: PasswordInputContainerProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <PasswordInput
      inputId={inputId}
      inputName={inputName}
      autoFocus={autoFocus}
      showPassword={showPassword}
      formErrors={formErrors}
      handleMouseDownPassword={handleMouseDownPassword}
      register={register}
      handleShowPassword={handleShowPassword}
    />
  );
};

export default PasswordInputContainer;
