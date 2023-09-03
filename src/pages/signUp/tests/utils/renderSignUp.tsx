import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { vi } from 'vitest';
import MockPageContainer, { config, rest, startServer } from '../../../../tests/mockComponents/mockPageContainer';
import SignUp from '../../signUp.container';

const mockHandleOnSubmit = vi.fn();

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
  config,
  mockHandleOnSubmit
};
