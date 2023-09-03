import { ReactNode } from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import MockTheme from './mockTheme';
import mockServerService from '../mockServer/mockServerService';

export const {
  rest,
  startServer,
} = mockServerService();

const MockPageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Router>
      <MockTheme>
        {children}
      </MockTheme>
    </Router>
  );
};

export default MockPageContainer;
