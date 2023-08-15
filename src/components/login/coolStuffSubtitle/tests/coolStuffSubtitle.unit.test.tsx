import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import translations from '../../../../utils/translations';
import CoolStuffSubtitle from '../coolStuffSubtitle';

describe('Cool Stuff Subtitle Component', () => {
  beforeEach(() => {
    render(<CoolStuffSubtitle />)
  });

  it('should render the component', () => {
    const subtitle = screen.getByText(translations.coolStuff);

    expect(subtitle).toBeInTheDocument();
  });
});
