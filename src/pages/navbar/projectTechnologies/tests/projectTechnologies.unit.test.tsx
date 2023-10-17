import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MockTheme from 'tests/mockComponents/mockTheme';
import translations from 'utils/translations';
import ProjectTechnologies from '../projectTechnologies';

describe('Project Technologies Component', () => {
  const renderProjectTechnologies = () => {
    render(
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
  });

  it('should render the title, links with description and image', async () => {
    const title = await screen.findByText(translations.projectStatistics.title);
    const materialUILink = await screen.findByRole('link', {
      name: /material ui/i
    });
    const materialUIDescription = await screen.findByText(/\- for a polished and customizable ui design\./i);
    const charizardImg = await screen.findByRole('img', { name: /charizards\-image/i });

    expect(title).toBeInTheDocument();
    expect(materialUILink).toBeInTheDocument();
    expect(materialUIDescription).toBeInTheDocument();
    expect(charizardImg).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    expect(screen).toMatchSnapshot();
  });
});
