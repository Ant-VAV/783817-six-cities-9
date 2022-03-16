import { City as CityEnum, SortType } from '../const';

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

export interface PlaceLocation {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface MapPlaceLocation extends PlaceLocation {
  placeId: number;
}

interface City {
  location: PlaceLocation;
  name: string;
}

export interface Review {
  comment: string
  date: string
  id: number
  rating: number
  user: User
}

export interface State {
  city: CityEnum;
  placeInfoList: PlaceInfo[];
  sortType: SortType;
}
