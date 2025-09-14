import LogoutAllButton from '../components/LogoutAllButton';
import LogoutButton from '../components/LogoutButton';

export default function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to your Dashboard</h2>
      <p>You are successfully logged in.</p>
      <LogoutButton />
      <LogoutAllButton />
    </div>
  );
}
 