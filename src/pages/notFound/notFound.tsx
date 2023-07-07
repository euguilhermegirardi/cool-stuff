import ElementLink from '../../components/elementLink/elementLink';
import LoginTitle from '../../components/login/loginTitle/loginTitle';
import LoginWrapper from '../../components/login/loginWrapper/loginWrapper';
import { useTranslations } from '../../hooks/useTranslations';

const NotFound = () => {
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <LoginTitle
          title={translations.notFound.title}
          fontSizeXs={33}
        />

        <ElementLink
          link={'/'}
          text={translations.notFound.return}
        />
      </>
    </LoginWrapper>
  );
};

export default NotFound;
