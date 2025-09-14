import { Navigate } from 'react-router-dom';
import { getAccessToken } from '../utils/token';
import { JSX } from 'react';

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
  const token = getAccessToken();
  return token ? children : <Navigate to="/login" replace />;
}
