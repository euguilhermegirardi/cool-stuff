import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';

export const createHandlers = (
  config: any
): RestHandler<MockedRequest<DefaultBodyType>>[] => {
  const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [];

  handlers.push(
    rest.get(
      `${config.core.api.baseUrl}`,
      async (req, res, ctx) => {
        return res(
          ctx.json([
            {
              "userEmail": "testing@uol.com",
              "userPassword": "testingThetest",
              "id": 1
            },
          ])
        );
      }
    )
  );

  return handlers;
};
