import { TabList } from '../tab-list/tab-list';
import { Places } from '../places/places';
import { PlacesEmpty } from '../places/places-empty';
import { Header } from '../layout/header/header';

export interface MainProps {
  rentOffersTotal: number;
}

function Main(props: MainProps) {
  const { rentOffersTotal } = props;
  const hasNoPlaces = rentOffersTotal === 0;
  return (
    <div className='page page--gray page--main'>
      <Header isLoggedIn isMainPage/>
      <main className={`page__main page__main--index ${hasNoPlaces && 'page__main--index-empty'}`}>
        <h1 className='visually-hidden'>Cities</h1>
        <TabList/>
        <div className='cities'>
          {hasNoPlaces ? (
            <PlacesEmpty/>
          ) : (
            <Places rentOffersTotal={rentOffersTotal}/>
          )}
        </div>
      </main>
    </div>
  );
}

export default Main;
