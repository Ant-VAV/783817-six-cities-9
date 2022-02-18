import { Route, Routes } from 'react-router-dom';
import Main, { MainProps } from '../../pages/main/main';
import { AuthorizationStatus, Page } from '../../const';
import { NotFound } from '../../pages/not-found/not-found';
import { PlacePage } from '../../pages/place-page/place-page';
import { Favorites } from '../../pages/favorites/favorites';
import { Login } from '../../pages/login/login';
import { PrivateRoute } from '../private-route/private-route';

function App(props: MainProps): JSX.Element {
  const { rentOffersTotal } = props;
  return (
    <Routes>
      <Route path={Page.Main} element={<Main rentOffersTotal={rentOffersTotal}/>}/>
      <Route path={Page.Place} element={<PlacePage isLoggedIn/>}/>
      <Route path={Page.Favorites} element={(
        <PrivateRoute authorizationStatus={AuthorizationStatus.Authorized}>
          <Favorites/>
        </PrivateRoute>
      )}
      />
      <Route path={Page.LogIn} element={<Login/>}/>
      <Route path={'*'} element={<NotFound/>}/>
    </Routes>);
}

export default App;
