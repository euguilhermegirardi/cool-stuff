import { ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import LoginWrapper from '../loginWrapper';

const componentTest = (
  <div>
    Testing the component
  </div>
);

describe('Login Wrapper Component', () => {
  const renderLoginWrapper = (children: ReactElement) =>
    render(<LoginWrapper children={children} />)

  it('should render the component', () => {
    renderLoginWrapper(componentTest);
  });
});
