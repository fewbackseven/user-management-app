import styles from '../styles/Form.module.css';
import { useState } from 'react';
import { login } from '../api/auth';
import { LoginRequest } from '../types/auth';
import { saveTokens } from '../utils/token';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState<LoginRequest>({ email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    navigate('/dashboard');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(form);
      console.log('Login success:', response.data);
      //Save tokens to localStorage or context
      saveTokens(response.data.accessToken, response.data.refreshToken);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

 
return (
  <form onSubmit={handleSubmit} className={styles.formContainer}>
    <h2>Login</h2>
    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
    <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
    <button type="submit">Login</button>
    {error && <p className={styles.error}>{error}</p>}
  </form>
);

}
