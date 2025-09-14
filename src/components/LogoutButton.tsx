import { useNavigate } from 'react-router-dom';
import { logout } from '../api/auth';
import { getRefreshToken, clearTokens } from '../utils/token';

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = getRefreshToken();
    try {
      if (refreshToken) {
        await logout({ refreshToken });
      }
    } catch (err) {
      console.error('Logout failed:', err);
    } finally {
      clearTokens();
      navigate('/login');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
