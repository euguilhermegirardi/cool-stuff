import ElementLink from '../../components/elementLink/elementLink';
import LoginTitle from '../../components/loginTitle/loginTitle';
import LoginWrapper from '../../components/loginWrapper/loginWrapper';
import { useTranslations } from '../../hooks/useTranslations';

const NotFound = () => {
  const translations = useTranslations();

  return (
    <LoginWrapper>
      <>
        <LoginTitle
          title={translations.notFound.title}
          fontSize={38}
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
