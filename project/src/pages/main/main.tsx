import { CityList } from '../../components/city-list/city-list';
import { Places } from '../../components/places/places';
import { PlacesEmpty } from '../../components/places/places-empty';
import { Header } from '../../components/layout/header/header';
import { City, SearchParams } from '../../const';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { changeCityAction, changeSortType, getCurrentPlaceListInfoAction } from '../../store/actions';

function Main() {
  const { city } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCity = useAppSelector((state) => state.city);
  const placeInfoList = useAppSelector((state) => state.currentPlaceInfoList);
  const dispatch = useAppDispatch();
  const isNoPlaces = placeInfoList && placeInfoList.length === 0;

  useEffect(() => {
    if (city && Object.keys(City).includes(city)) {
      dispatch(changeCityAction(city));
    }
    dispatch(changeSortType(searchParams.get(SearchParams.Sort)));
    dispatch(getCurrentPlaceListInfoAction());
  }, [city, searchParams, dispatch]);

  return (
    <div className='page page--gray page--main'>
      <Header isLoggedIn isMainPage/>
      <main className={`page__main page__main--index ${isNoPlaces ? 'page__main--index-empty' : ''}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <CityList activeCity={activeCity}/>
        <div className='cities'>
          {placeInfoList && (
            placeInfoList.length === 0 ? (
              <PlacesEmpty activeCity={activeCity}/>
            ) : (
              <Places placeInfoList={placeInfoList} activeCity={activeCity} onSetSortType={setSearchParams} />
            ))}
        </div>
      </main>
    </div>
  );
}

export default Main;
