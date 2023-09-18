import { useRef } from 'react';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import useAuth from 'hooks/useAuth';
import useGetContentInnerWidth from 'hooks/useGetContentInnerWidth';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <Dashboard
      contentInnerWidth={contentInnerWidth}
      componentRef={componentRef}
      handleLogOut={handleLogOut}
    />
  );
}, ErrorFallbackComponent);

export default DashboardContainer;
