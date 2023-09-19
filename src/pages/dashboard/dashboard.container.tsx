import { Suspense, useRef } from 'react';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import FullPageLoading from 'components/fullPageLoading/fullPageLoading';
import useAuth from 'hooks/useAuth';
import useGetContentInnerWidth from 'hooks/useGetContentInnerWidth';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FullLoadingPageWrapper } from 'shared/css/fullPageLoadingWrapper';
import { v1 as uuidv1 } from 'uuid';
import Dashboard from './dashboard';

const DashboardContainer = withErrorBoundary(() => {
  const componentRef: any = useRef();
  const { width: contentInnerWidth } = useGetContentInnerWidth(componentRef);
  const { logout } = useAuth();
  const translations = useTranslations();

  const notify = () => {
    toast.error(translations.somethingWentWrong, {
      toastId: uuidv1()
    });
  };

  const handleLogOut = () => logout();

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
        handleLogOut={handleLogOut}
      />
    </Suspense>
  );
}, ErrorFallbackComponent);

export default DashboardContainer;
