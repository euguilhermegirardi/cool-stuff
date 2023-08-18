import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import jest from 'jest-mock';
import MockTheme from '../../../tests/mockTheme';
import MuiButton from '../muiButton';

const submitBtnTxt = 'Submit';
const mockOnClick = jest.fn();

describe('Mui Button Component', () => {
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

  it('should render the button with text', async () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      false,
      false,
      mockOnClick,
    );
    const buttonTxt = await screen.findByText(submitBtnTxt);

    expect(buttonTxt).toBeInTheDocument();
  });

  it('should be able to click on the button', async () => {
    renderMuiButtonComponent(
      'submit',
      submitBtnTxt,
      false,
      false,
      mockOnClick,
    );
    const button = await screen.findByRole('button', { name: submitBtnTxt });

    await userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
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
