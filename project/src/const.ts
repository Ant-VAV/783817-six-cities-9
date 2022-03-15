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

export enum StoreAction {
  ChangeCity = 'ChangeCity',
  GetPlaceInfo = 'GetPlaceInfo',
  ChangeSortType = 'ChangeSortType',
}

export enum SortType {
  Popular = 'Popular',
  PriceAsc = 'PriceAsc',
  PriceDesc = 'PriceDesc',
  RatedFirst = 'RatedFirst'
}

export enum SearchParams {
  Sort = 'sort'
}
