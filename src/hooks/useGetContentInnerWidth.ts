import { useCallback, useEffect, useState } from 'react';

const useGetContentInnerWidth = (myRef: any) => {
  const [width, setWidth] = useState<number>(0);

  const handleResize = useCallback(() => {
    setWidth(myRef.current?.offsetWidth);
  }, [myRef]);

  useEffect(() => {
    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    }
  }, [myRef, handleResize]);

  return { width };
};

export default useGetContentInnerWidth;
