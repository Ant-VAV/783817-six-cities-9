export interface PlaceInfoList extends Array<PlaceInfo> {
}

export interface PlaceInfo {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: PlaceLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export interface User {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

interface PlaceLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface City {
  location: PlaceLocation;
  name: string;
}

export interface Reviews extends Array<Review> {}

export interface Review {
  comment: string
  date: string
  id: number
  rating: number
  user: User
}