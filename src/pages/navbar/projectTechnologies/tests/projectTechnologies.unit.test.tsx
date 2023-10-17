import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MockTheme from 'tests/mockComponents/mockTheme';
import ProjectTechnologies from '../projectTechnologies';

describe('Project Technologies Component', () => {
  const renderProjectTechnologies = () => {
    return (
      <BrowserRouter>
        <MockTheme>
          <ProjectTechnologies />
        </MockTheme>
      </BrowserRouter>
    )
  };

  beforeEach(() => renderProjectTechnologies());

  it('should render the component', () => {
    expect(screen).not.toBeNull();
    screen.debug(undefined, 9999999)
  });
});
