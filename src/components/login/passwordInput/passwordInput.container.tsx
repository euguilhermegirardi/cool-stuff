import { useState } from 'react';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import { withErrorBoundary } from 'react-error-boundary';
import { PasswordInputContainerProps } from './interfaces/passwordInputContainerProps';
import PasswordInput from './passwordInput';

const PasswordInputContainer = withErrorBoundary(({
  inputId,
  inputName,
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
      showPassword={showPassword}
      formErrors={formErrors}
      handleMouseDownPassword={handleMouseDownPassword}
      register={register}
      handleShowPassword={handleShowPassword}
    />
  );
}, ErrorFallbackComponent);

export default PasswordInputContainer;
