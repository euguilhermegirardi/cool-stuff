import { Skeleton } from '@mui/material';

type MuiSkeletonProps = {
  variant: 'circular' | 'rounded' | 'rectangular';
  width: number;
  height: number;
};

const MuiSkeleton = ({
  variant,
  width,
  height,
}: MuiSkeletonProps) => {
  return (
    <Skeleton
      variant={variant}
      width={width}
      height={height}
      animation='wave'
    />
  );
};

export default MuiSkeleton;
