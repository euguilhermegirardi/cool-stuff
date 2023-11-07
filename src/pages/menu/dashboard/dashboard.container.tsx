import { lazy, Suspense, useRef } from 'react';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import useAuth from 'hooks/useAuth';
import useGetContentInnerWidth from 'hooks/useGetContentInnerWidth';
import { withErrorBoundary } from 'react-error-boundary';
import 'react-toastify/dist/ReactToastify.css';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';

const Dashboard = lazy(() => import('./dashboard'));

const DashboardContainer = withErrorBoundary(() => {
  const componentRef: any = useRef();
  const { width: contentInnerWidth } = useGetContentInnerWidth(componentRef);

  return (
    <Suspense
      fallback={
        <FullLoadingPageWrapper>
          <FullPageLoading />
        </FullLoadingPageWrapper>
      }
    >
      <Dashboard
        contentInnerWidth={contentInnerWidth}
        componentRef={componentRef}
      />
    </Suspense>
  );
}, ErrorFallbackComponent);

export default DashboardContainer;
