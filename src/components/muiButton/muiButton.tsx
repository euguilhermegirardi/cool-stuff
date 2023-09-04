import { Button, Typography, useTheme } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { withErrorBoundary } from 'react-error-boundary';
import { MuiButtonProps } from './interface/muiButtonProps';
import { ErrorFallbackComponent } from '../errorFallbackComponent/errorFallbackComponent';

const MuiButton = withErrorBoundary(({
  type,
  variant = 'contained',
  color = 'primary',
  text,
  isLoading,
  isDisabled,
  onClick,
}: MuiButtonProps) => {
  const theme = useTheme();
  const disabled = isDisabled ?? isLoading;
  const buttonType = type ?? 'submit';

  return (
    <Button
      variant={variant}
      color={color}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      fullWidth
    >
      {isLoading ? (
        <CircularProgress
          size={25}
          sx={{ color: theme.palette.common.white }}
        />
      ) : (
        <Typography>{text}</Typography>
      )}
    </Button>
  );
}, ErrorFallbackComponent);

export default MuiButton;
