import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from '../../redux/selectors';

const Menu = () => {
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <div>
      <p>Welcome, {userName}!</p>
      <p>{userEmail}</p>
    </div>
  );
};

export default Menu;