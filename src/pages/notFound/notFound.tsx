import ElementLink from 'components/elementLink/elementLink';
import { ErrorFallbackComponent } from 'components/errorFallbackComponent/errorFallbackComponent';
import LoginTitle from 'components/login/loginTitle/loginTitle';
import LoginWrapper from 'components/login/loginWrapper/loginWrapper';
import { useTranslations } from 'hooks/useTranslations';
import { withErrorBoundary } from 'react-error-boundary';

const NotFound = withErrorBoundary(() => {
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <LoginTitle
          title={translations.notFound.title}
          fontSizeXs={33}
          fontSizeMd={50}
        />

        <ElementLink
          link={'/'}
          text={translations.notFound.return}
        />
      </>
    </LoginWrapper>
  );
}, ErrorFallbackComponent);

export default NotFound;
