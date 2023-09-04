const FallbackComponent = () => {
  return (
    <div >
      <h2>Something went wrong...</h2>
    </div>
  );
};

export const ErrorFallbackComponent = {
  FallbackComponent,
  onError(error: Error, info: { componentStack: string }) {
    if (error) console.log(error);
  },
};

export default FallbackComponent;
