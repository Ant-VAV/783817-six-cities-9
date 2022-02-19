export enum Page {
  Main = '/',
  LogIn = '/login',
  Favorites = '/favorites',
  Place = '/place/:id',
}

export enum AuthorizationStatus {
  Unknown = 'unknown',
  Authorized = 'authorized',
  NotAuthorized = 'notAuthorized',
}
