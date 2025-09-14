import api from './axios';
import {
  RegisterRequest,
  LoginRequest,
  AuthResponse,
  RefreshRequest,
  LogoutRequest,
} from '../types/auth';

export const register = (data: RegisterRequest) =>
  api.post<AuthResponse>('/api/auth/register', data);

export const login = (data: LoginRequest) =>
  api.post<AuthResponse>('/api/auth/login', data);

export const refresh = (data: RefreshRequest) =>
  api.post('/api/auth/refresh', data);

export const logout = (data: LogoutRequest) =>
  api.post('/api/auth/logout', data);

export const logoutAll = () =>
  api.post('/api/auth/logout-all');

export const whoami = () =>
  api.get('/whoami');

export const healthCheck = () =>
  api.get('/health');