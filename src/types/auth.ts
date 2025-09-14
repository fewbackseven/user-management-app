export interface RegisterRequest {
  email?: string;
  userName?: string;
  password?: string;
}

export interface LoginRequest {
  email?: string;
  password?: string;
}

export interface AuthResponse {
  accessToken?: string;
  expiresAtUtc: string;
  refreshToken?: string;
  refreshExpiresAtUtc?: string;
}

export interface RefreshRequest {
  refreshToken: string;
}

export interface LogoutRequest {
  refreshToken?: string;
}
