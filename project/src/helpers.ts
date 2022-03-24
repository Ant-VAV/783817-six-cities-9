import { PlaceInfo } from './types/client';
import { AuthorizationStatus, City, SortType } from './const';

export const capitaliseFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const getPlaceRating = (rating: number) => 20 * Math.trunc(rating);

export const getPlaceHref = (id: number) => `/place/${id}`;


export const getFilteredPlaceListInfo = (places: PlaceInfo[], city: City, sort?: SortType): PlaceInfo[] => {
  const filtered = places.filter((place) => place.city.name === city);
  if (sort) {
    switch (sort) {
      case SortType.PriceAsc:
        return filtered.sort((a, b) => a.price - b.price);
      case SortType.PriceDesc:
        return filtered.sort((a, b) => b.price - a.price);
      case SortType.RatedFirst:
        return filtered.sort((a, b) => b.rating - a.rating);
      default:
        return filtered;
    }
  }
  return filtered;
};

export const isUnknownAuthStatus = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const isAuthorized = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Authorized;
