import { DefaultBodyType, MockedRequest, rest, RestHandler } from 'msw';
import { mockHandleOnSubmit } from '../../pages/signUp/tests/utils/renderSignUp';
import { mockUsers } from '../mockData/users';

export const createHandlers = (
  config: any
): RestHandler<MockedRequest<DefaultBodyType>>[] => {
  const handlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [];

  handlers.push(
    rest.get(
      `${config.core.api.baseUrl}/users`,
      async (req, res, ctx) => {
        return (
          res(ctx.json(mockUsers))
        )
      }
    ),
    rest.post(`${config.core.api.baseUrl}/users`,
      (req, res, ctx) => {
        mockHandleOnSubmit();
        return res(
          ctx.status(200)
        );
      })
  );

  return handlers;
};
