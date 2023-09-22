import { SxProps, Theme } from '@mui/material';

export interface MuiModalProps {
  isMobile?: boolean;
  sx?: SxProps<Theme> | undefined;
  children: React.ReactNode;
  onClose: () => void;
};
