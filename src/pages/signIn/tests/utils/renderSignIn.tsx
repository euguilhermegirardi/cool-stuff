import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import jest from 'jest-mock';
import AuthContext from '../../../../context/auth.context';
import MockPageContainer, { config, rest, startServer } from '../../../../tests/mockComponents/mockPageContainer';
import SignIn from '../../signIn.container';

const mockSignInRequest = jest.fn();
const mockIsLoggedIn = false;
const mockLogin = jest.fn();
const mockLogout = jest.fn();

const server = startServer();

const renderSignInContent = () => {
  render(
    <MockPageContainer>
      <AuthContext.Provider
        value={{
          mockIsLoggedIn,
          mockLogin,
          mockLogout,
        }}>
        <SignIn />
      </AuthContext.Provider>
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
