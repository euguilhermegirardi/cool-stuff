import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MockPageContainer, { rest, startServer } from '../../../../tests/mockComponents/mockPageContainer';
import SignUp from '../../signUp.container';

const server = startServer();

const renderSignUpContent = () => {
  render(
    <MockPageContainer>
      <SignUp />
    </MockPageContainer>
  )
};

export {
  renderSignUpContent,
  server,
  rest,
};
