import { CityListItem } from './city-list-item';
import { City } from '../../const';
import { useAppDispatch } from '../../hooks/state';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { changeCityAction } from '../../store/filter-params/filter-params';

interface CityListProps {
  activeCity: City;
}

export function CityList(props: CityListProps) {
  const { activeCity } = props;
  const { city } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (city && Object.keys(City).includes(city)) {
      dispatch(changeCityAction(city));
    }
  }, [city, dispatch]);

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.keys(City).map((cityName) => <CityListItem cityName={cityName} isActive={cityName === activeCity} key={cityName}/>)}
        </ul>
      </section>
    </div>
  );
}
