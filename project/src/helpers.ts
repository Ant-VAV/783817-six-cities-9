import { PlaceInfo, Review } from './types/client';
import { City, SortType } from './const';

export const capitaliseFirstLetter = (value: string) => value.charAt(0).toUpperCase() + value.slice(1);

export const getPlaceRating = (rating: number) => 20 * Math.trunc(rating);

export const getPlaceHref = (id: number) => `/place/${id}`;

export const getEmptyReview = (): Review => ({
  id: 0,
  comment: '',
  rating: 0,
  date: '',
  user: {
    avatarUrl: '',
    id: 0,
    isPro: false,
    name: '',
  },
});

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
