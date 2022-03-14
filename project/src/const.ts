export enum Page {
  Main = '/',
  City = ':city',
  LogIn = '/login',
  Favorites = '/favorites',
  Place = '/place/:id',
}

export enum AuthorizationStatus {
  Unknown = 'unknown',
  Authorized = 'authorized',
  NotAuthorized = 'notAuthorized',
}

export enum City {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export enum StoreActions {
  CHANGE_CITY = 'CHANGE_CITY',
  GET_PLACES_INFO = 'GET_PLACES_INFO',
}
