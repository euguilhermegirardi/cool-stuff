import { rest } from 'msw';
import { mockUsers } from '../mockData/users';

export const mockHandleSignUpOnSubmit = vi.fn();

const mockCONFIG: any = {
  core: {
    api: {
      baseUrl: 'http://localhost:3000',
    },
  },
};

export const handlers = [
  rest.get(
    `${mockCONFIG.core.api.baseUrl}/users`,
    async (req, res, ctx) => {
      return (
        res(ctx.json(mockUsers))
      )
    }
  ),
  rest.post(`${mockCONFIG.core.api.baseUrl}/users`,
    (req, res, ctx) => {
      mockHandleSignUpOnSubmit();
      return res(
        ctx.status(200)
      );
    })
];
