import { MemoryRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockTheme from '../../../../tests/mockComponents/mockTheme';
import mockServerService from '../../../../tests/mockServer/mockServerService';
import SignUp from '../../signUp.container';

const mockCONFIG: any = {
  core: {
    api: {
      baseUrl: 'http://localhost:3000',
    },
  },
};

export const {
  config,
  addHandler,
  rest,
  startServer,
  MockQueryClientProvider,
} = mockServerService(mockCONFIG);

const server = startServer();

const renderSignUpContent = () => {
  render(
    <Router>
      <MockTheme>
        <SignUp />
      </MockTheme>
    </Router>
  )
};

export {
  renderSignUpContent,
  server,
};
