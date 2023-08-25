import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import jest from 'jest-mock';
import MockPageContainer, { config, rest, startServer } from '../../../../tests/mockComponents/mockPageContainer';
import SignIn from '../../signIn.container';

const mockSignInRequest = jest.fn();

const server = startServer();

const renderSignInContent = () => {
  render(
    <MockPageContainer>
      <SignIn />
    </MockPageContainer>
  );
};

export {
  renderSignInContent,
  server,
  rest,
  config,
  mockSignInRequest,
};
