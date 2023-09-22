import { Box, Dialog, Modal, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MuiModalProps } from './interfaces/muiModalProps';

const MuiModal = ({
  children,
  sx,
  onClose,
  isMobile,
  ...modalProps
}: MuiModalProps) => {
  const theme = useTheme();
  return (
    <Dialog open={false} {...modalProps} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '785px',
          borderRadius: theme.spacing(1),
          border: 'none',
          bgcolor: 'background.paper',
          outline: 'none',
          overflow: 'hidden',
          ...(sx || {}),
        }}
      >
        {children}
        <CloseIcon
          sx={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            cursor: 'pointer',
          }}
          role='button'
          onClick={onClose}
        />
      </Box>
    </Dialog>
  );
};

export default MuiModal;
