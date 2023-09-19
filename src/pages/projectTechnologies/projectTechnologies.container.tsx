import { lazy, Suspense } from 'react';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';

const ProjectTechnologies = lazy(() => import('./projectTechnologies'));

const ProjectTechnologiesContainer = () => {
  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <ProjectTechnologies />
    </Suspense>

  );
};

export default ProjectTechnologiesContainer;
