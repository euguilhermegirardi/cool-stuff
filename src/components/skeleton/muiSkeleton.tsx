import { Skeleton } from '@mui/material';

type MuiSkeletonProps = {
  variant: 'circular' | 'rounded' | 'rectangular';
  width: number | string;
  height: number | string;
  color?: string
};

const MuiSkeleton = ({
  variant,
  width,
  height,
  color,
}: MuiSkeletonProps) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      animation='wave'
      sx={{ backgroundColor: color }}
    />
  );
};

export default MuiSkeleton;
