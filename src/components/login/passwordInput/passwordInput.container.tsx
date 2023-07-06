import { useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import PasswordInput from './passwordInput';

const PasswordInputContainer = ({
  autoFocus,
  register,
  formErrors,
  inputId,
}: {
  autoFocus: boolean;
  register: UseFormRegister<any>;
  formErrors?: {
    message?: string;
  };
  inputId: string;
}) => {
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
