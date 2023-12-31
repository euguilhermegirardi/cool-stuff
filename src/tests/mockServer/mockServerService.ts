import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { handlers } from './serverHandlers';

const mockServerService = () => {
  return {
    startServer: () => {
      const server = setupServer(...handlers);
      beforeAll(() => server.listen());
      afterEach(() => server.resetHandlers());
      afterAll(() => server.close());

      return server;
    },
    rest,
  };
};

export default mockServerService;
