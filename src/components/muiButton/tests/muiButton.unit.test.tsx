import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import jest from 'jest-mock';
import MockTheme from '../../../tests/mockTheme';
import MuiButton from '../muiButton';

const submitBtnTxt = 'Submit';
const mockOnClick = jest.fn();

describe('MuiButton Component', () => {
  const renderMuiButtonComponent = (
    type: 'submit' | 'reset' | 'button',
    text: string,
    isLoading: boolean,
    isDisabled: boolean,
    onClick: () => void,
  ) =>
    render(
      <MockTheme>
        <MuiButton
          type={type}
          text={text}
          isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={onClick}
        />
      </MockTheme>
    );

  it('should render the component', () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      false,
      true,
      mockOnClick,
    );

    expect(screen).not.toBeNull();
  });

  it('should render the button with disabled class', async () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      false,
      true,
      mockOnClick,
    );
    const button = await screen.findByRole('button', { name: 'Submit' });

    expect(button).toHaveClass('Mui-disabled');
  });

  it('should render the button without disabled class', async () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      false,
      false,
      mockOnClick,
    );
    const button = await screen.findByRole('button', { name: 'Submit' });

    expect(button).not.toHaveClass('Mui-disabled');
  });

  it('should render the loading circular progress', async () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      true,
      false,
      mockOnClick,
    );
    const progressbar = await screen.findByRole('progressbar');

    expect(progressbar).toBeInTheDocument();
  });
});
