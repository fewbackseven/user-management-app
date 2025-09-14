import styles from '../styles/Form.module.css';
import { useState } from 'react';
import { register } from '../api/auth';
import { RegisterRequest } from '../types/auth';
import { saveTokens } from '../utils/token';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState<RegisterRequest>({ email: '', userName: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });    
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register(form);
      console.log('Register success:', response.data);
      //Save tokens to localStorage or context
      saveTokens(response.data.accessToken, response.data.refreshToken);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

 
return (
  <form onSubmit={handleSubmit} className={styles.formContainer}>
    <h2>Register</h2>
    <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
    <input name="userName" type="text" placeholder="Username" onChange={handleChange} required />
    <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
    <button type="submit">Register</button>
    {error && <p className={styles.error}>{error}</p>}
  </form>
);

}
