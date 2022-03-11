import { CityListItem } from './city-list-item';
import { City } from '../../const';

interface CityListProps {
  activeCity: City;
}

export function CityList(props: CityListProps) {
  const { activeCity } = props;

  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          {Object.keys(City).map((city) => <CityListItem cityName={city} isActive={city === activeCity} key={city}/>)}
        </ul>
      </section>
    </div>
  );
}
