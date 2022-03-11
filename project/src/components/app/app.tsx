import { Route, Routes } from 'react-router-dom';
import Main from '../../pages/main/main';
import { AuthorizationStatus, Page } from '../../const';
import { NotFound } from '../../pages/not-found/not-found';
import { PlacePage } from '../../pages/place-page/place-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { PrivateRoute } from '../private-route/private-route';
import { PlaceInfo } from '../../types/client';

interface AppProps {
  placeInfoList: PlaceInfo[];
}

function App(props: AppProps): JSX.Element {
  const { placeInfoList } = props;
  return (
    <Routes>
      <Route path={Page.Main}>
        <Route index element={<Main/>}/>
        <Route path={Page.City} element={<Main/>}/>
      </Route>
      <Route path={Page.Place} element={<PlacePage isLoggedIn/>}/>
      <Route path={Page.Favorites} element={(
        <PrivateRoute authorizationStatus={AuthorizationStatus.Authorized}>
          <Favorites placeInfoList={placeInfoList}/>
        </PrivateRoute>
      )}
      />
      <Route path={Page.LogIn} element={<Login/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>);
}

export default App;
