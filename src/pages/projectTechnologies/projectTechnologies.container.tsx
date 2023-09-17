import { lazy, Suspense } from 'react';
import Loading from 'components/loading/loading';

const ProjectTechnologies = lazy(() => import('./projectTechnologies'));

const ProjectTechnologiesContainer = () => {
  return (
    <Suspense
      fallback={<Loading />}
    >
      <ProjectTechnologies />
    </Suspense>
  );
};

export default ProjectTechnologiesContainer;
