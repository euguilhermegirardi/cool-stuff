import { QueryClient, QueryClientProvider } from 'react-query';

const MockQueryClientProvider = ({ children }: any) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default MockQueryClientProvider;
