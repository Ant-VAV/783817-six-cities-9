const AUTH_TOKEN_PREFIX = 'six_cities_token';

export const getToken = (): string => {
  const token = localStorage.getItem(AUTH_TOKEN_PREFIX);
  return token || '';
};

export const setToken = (token: string): void => localStorage.setItem(AUTH_TOKEN_PREFIX, token);

export const deleteToken = (): void => localStorage.removeItem(AUTH_TOKEN_PREFIX);
