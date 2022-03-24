export enum Page {
  Main = '/',
  City = ':city',
  LogIn = '/login',
  Favorites = '/favorites',
  Place = '/place/:id',
  NotFound = '/404',
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
  GetCurrentPlaceInfo = 'GetCurrentPlaceInfo',
  ChangeSortType = 'ChangeSortType',
  SetPlaceInfoList = 'SetPlaceInfoList',
  SetPlaceReview = 'SetPlaceReview',
  SetAuthStatus = 'SetAuthStatus',
  SetErrorAction = 'SetErrorAction',
  RedirectToPage = 'RedirectToPage',
}

export enum StoreApiAction {
  FetchPlacesInfoList = 'FetchPlacesInfoList',
  FetchPlaceReview = 'FetchPlaceReview',
  PostPlaceReview = 'PostPlaceReview',
  GetAuthToken = 'GetAuthToken',
  Logout = 'Logout',
  ClearError = 'ClearError',
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

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export enum HttpCode {
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
