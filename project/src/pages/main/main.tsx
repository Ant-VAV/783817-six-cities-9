import { CityList } from '../../components/city-list/city-list';
import { Places } from '../../components/places/places';
import { Header } from '../../components/layout/header/header';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/state';
import { getActiveCity, getAllPlaces } from '../../store/selectors/selectors';

function Main() {
  const [isNoPlaces, setIsNoPlaces] = useState<boolean>(false);
  const activeCity = useAppSelector(getActiveCity);
  const allPlaces = useAppSelector(getAllPlaces);

  return (
    <div className='page page--gray page--main'>
      <Header isMainPage/>
      <main className={`page__main page__main--index ${isNoPlaces ? 'page__main--index-empty' : ''}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <CityList activeCity={activeCity}/>
        <div className='cities'>
          <Places allPlaces={allPlaces} activeCity={activeCity} onSetIsNoPlaces={setIsNoPlaces}/>
        </div>
      </main>
    </div>
  );
}

export default Main;
