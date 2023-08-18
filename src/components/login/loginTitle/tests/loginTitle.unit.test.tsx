import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LoginTitle from '../loginTitle';

const mockTitle = 'Testing the login title';

describe('Login Title Component', () => {
  const renderLoginTitle = (title: string) =>
    render(
      <LoginTitle title={title} fontSizeXs={34} fontSizeMd={30} />
    );

  it('should render the component', () => {
    renderLoginTitle(mockTitle);
    const title = screen.getByText(mockTitle);

    expect(title).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const loginTitleComponent = renderLoginTitle(mockTitle);
    expect(loginTitleComponent).toMatchSnapshot();
  });
});
