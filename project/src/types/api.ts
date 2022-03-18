export interface AuthData {
  email: string;
  password: string;
}

export interface UserApi {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}
