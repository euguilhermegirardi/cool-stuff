import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { mockUsers } from '../../../../tests/mockData/users/mockUsers';
import { config, renderSignInContent, server } from '../utils/renderSignIn';

const prepareRender = async () => {
  server.use(
    rest.get(
      `${config.core.api.baseUrl}/users`,
      async (req, res, ctx) => {
        const response = res(ctx.json(mockUsers));
        console.log('testando', response)
        return (
          res(ctx.json(mockUsers))
        )
      }
    )
  );

  renderSignInContent();
};

describe('Sign In Integration Test', () => {
  it('should render the component', async () => {
    prepareRender();
    expect(screen).not.toBeNull();
    screen.debug(undefined, 99999);
  });
});
