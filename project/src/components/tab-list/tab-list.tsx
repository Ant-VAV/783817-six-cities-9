import { TabListItem } from './tab-list-item';

export function TabList() {
  return (
    <div className='tabs'>
      <section className='locations container'>
        <ul className='locations__list tabs__list'>
          <TabListItem cityName={'Paris'}/>
          <TabListItem cityName={'Cologne'}/>
          <TabListItem cityName={'Brussels'}/>
          <TabListItem cityName={'Amsterdam'} isActive/>
          <TabListItem cityName={'Hamburg'}/>
          <TabListItem cityName={'Dusseldorf'}/>
        </ul>
      </section>
    </div>
  );
}
