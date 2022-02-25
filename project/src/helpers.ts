import { Review } from './types/client';

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
