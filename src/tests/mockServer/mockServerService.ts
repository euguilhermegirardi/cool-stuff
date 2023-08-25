import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { setupServer } from 'msw/node';
import { createHandlers } from './serverHandlers';
import MockQueryClientProvider from '../mockComponents/mockQueryClientProvider';

const mockServerService = (config?: any) => {
  const defaultConfig: any = {
    core: {
      api: {
        baseUrl: 'https://test.com',
      },
    },
  };

  const serverHandlers = createHandlers(config || defaultConfig);

  return {
    startServer: () => {
      const server = setupServer(...serverHandlers);
      beforeAll(() => server.listen());
      afterEach(() => server.resetHandlers());
      afterAll(() => server.close());

      return server;
    },
    addHandler: (handler: RestHandler<MockedRequest<DefaultBodyType>>[]) => serverHandlers.push(...handler),
    rest,
    config: config || defaultConfig,
    MockQueryClientProvider,
  };
};

export default mockServerService;
