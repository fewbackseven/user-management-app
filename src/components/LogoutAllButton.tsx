import { useNavigate } from 'react-router-dom';
import { logoutAll } from '../api/auth';
import { clearTokens } from '../utils/token';

export default function LogoutButton() {
  const navigate = useNavigate();

const handleLogoutAll = async () => {    
  try {
    await logoutAll();
  } catch (err) {
    console.error('Logout all failed:', err);
  } finally {
    clearTokens();
    navigate('/login');
  }
};
 return <button onClick={handleLogoutAll}>Logout-All</button>;
}
