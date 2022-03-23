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

export interface ReviewPost {
  placeId: string;
  comment: string;
  rating: string;
}
