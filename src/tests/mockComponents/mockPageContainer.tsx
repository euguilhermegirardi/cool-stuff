import { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MockTheme from './mockTheme';
import mockServerService from '../mockServer/mockServerService';

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
} = mockServerService(mockCONFIG);

const MockPageContainer = ({
  config,
  children,
}: {
  config?: {};
  children: ReactNode;
}) => {
  return (
    <Router
      initialEntries={[{ pathname: '/', search: 'testQueryParameters' }]}
    >
      <MockTheme>
        {children}
      </MockTheme>
    </Router>
  );
};

export default MockPageContainer;
