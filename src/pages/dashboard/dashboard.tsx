import MuiButton from '../../components/muiButton/muiButton';
import { useTranslations } from '../../hooks/useTranslations';

const Dashboard = ({
  handleLogOut,
}: {
  handleLogOut: () => void;
}) => {
  const translations = useTranslations();
  return (
    <>
      <div>Dashboard</div>

      <MuiButton
        type='button'
        color='ceruleanBlue'
        text={translations.dashboard.logout}
        onClick={handleLogOut}
      />
    </>
  );
};

export default Dashboard;
