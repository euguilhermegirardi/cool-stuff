export interface MuiButtonProps {
  type?: 'submit' | 'reset' | 'button';
  variant?: 'outlined' | 'contained' | 'text';
  color?:
  'primary' |
  'secondary' |
  'success' |
  'warning' |
  'error' |
  'red' |
  'bostonUniRed' |
  'ceruleanBlue' |
  'goldenYellow' |
  'goldenFoil'
  ;
  text: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
};
