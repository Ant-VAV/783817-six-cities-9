import { Header } from '../../components/layout/header/header';
import { PlaceInfo } from '../../types/client';
import { FavoritePlaceItem } from '../../components/favorite-page/favorite-place-item/favorite-place-item';
import { City } from '../../const';
import { Footer } from '../../components/layout/footer/footer';
import { FavoritesEmpty } from '../../components/favorite-page/favorites-empty/favorites-empty';

interface FavoritesProps {
  placeInfoList: PlaceInfo[];
}

export function Favorites(props: FavoritesProps) {
  const { placeInfoList } = props;

  const favoritesPlaces = placeInfoList.filter((place) => place.isFavorite);
  const allCities = Object.keys(City);

  return (
    <div className='page'>
      <Header isLoggedIn/>
      {favoritesPlaces.length > 0
        ? (
          <main className='page__main page__main--favorites'>
            <div className='page__favorites-container container'>
              <section className='favorites'>
                <h1 className='favorites__title'>Saved listing</h1>
                <ul className='favorites__list'>
                  {allCities.map((city) => (
                    <FavoritePlaceItem
                      placeInfoList={favoritesPlaces.filter((place) => place.city.name === city)}
                      city={city}
                      key={city}
                    />
                  ))}
                </ul>
              </section>
            </div>
          </main>
        ) : (
          <FavoritesEmpty/>
        )}
      <Footer/>
    </div>
  );
}
