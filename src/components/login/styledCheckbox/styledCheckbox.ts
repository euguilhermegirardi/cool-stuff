import { CheckboxProps } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import CheckedItem from 'assets/icons/checkedItem.svg';

export const MuiCheckBox = styled('span')(({ theme }) => ({
  width: 15,
  height: 15,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.common.white,
}));

export const MuiCheckedItemBox = styled(MuiCheckBox)<CheckboxProps>(
  ({ theme }) => ({
    backgroundImage: `${theme.palette.primary.main}`,
    '&:before': {
      display: 'block',
      width: 15,
      height: 15,
      backgroundImage: `url(${CheckedItem})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '13px 13px',
      content: '""',
    },
  })
);
