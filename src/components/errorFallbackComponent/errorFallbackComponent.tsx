const FallbackComponent = () => {
  return (
    <div >
      <h2>Something went wrong...</h2>
      <h3>Please, refresh the page and try again!</h3>
    </div>
  );
};

export const ErrorFallbackComponent = {
  FallbackComponent,
  onError(error: Error, info: { componentStack: string }) {
    if (error) console.log(error);
  },
};

export default ErrorFallbackComponent;
