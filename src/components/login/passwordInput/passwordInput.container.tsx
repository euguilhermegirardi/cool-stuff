import { useState } from 'react';
import { PasswordInputContainerProps } from './interfaces/passwordInputContainerProps';
import PasswordInput from './passwordInput';

const PasswordInputContainer = ({
  autoFocus,
  register,
  formErrors,
  inputId,
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
      autoFocus={autoFocus}
      register={register}
      formErrors={formErrors}
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      inputId={inputId}
    />
  );
};

export default PasswordInputContainer;
