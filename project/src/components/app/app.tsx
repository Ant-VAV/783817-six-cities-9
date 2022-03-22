import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { Page } from '../../const';
import { NotFound } from '../../pages/not-found/not-found';
import { PlacePage } from '../../pages/place-page/place-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { PrivateRoute } from '../private-route/private-route';
import { getPlaceListInfo } from '../../mocks/place-list-info';
import { useAppSelector } from '../../hooks/state';
import { TailSpin } from 'react-loader-spinner';
import { isUnknownAuthStatus } from '../../helpers';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (isUnknownAuthStatus(authorizationStatus) || !isDataLoaded) {
    return (
      <TailSpin ariaLabel='loading-indicator'/>
    );
  }

  return (
    <Routes>
      <Route path={Page.Main}>
        <Route index element={<Main/>}/>
        <Route path={Page.City} element={<Main/>}/>
      </Route>
      <Route path={Page.Place} element={<PlacePage/>}/>
      <Route path={Page.Favorites} element={(
        <PrivateRoute authorizationStatus={authorizationStatus}>
          <Favorites placeInfoList={getPlaceListInfo()}/>
        </PrivateRoute>
      )}
      />
      <Route path={Page.LogIn} element={<Login/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>);
}

export default App;
