import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import jest from 'jest-mock';
import { rest } from 'msw';
import { mockUsers } from '../../../../tests/mockData/users/mockUsers';
import { config, renderSignInContent, server } from '../utils/renderSignIn';

const mockRequest = jest.fn();

const prepareRender = async () => {
  server.use(
    rest.get(
      `${config.core.api.baseUrl}/users`,
      async (req, res, ctx) => {
        mockRequest();
        return res(ctx.json({ mockUsers }));
      }
    )
  );

  renderSignInContent();
};

describe('Sign In Integration Test', () => {
  beforeEach(() => {
    prepareRender();
  });

  it('should render the component', async () => {
    expect(screen).not.toBeNull();
    screen.debug(undefined, 99999);
  });
});

