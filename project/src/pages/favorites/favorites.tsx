import { Header } from '../../components/layout/header/header';
import { PlaceInfo } from '../../types/client';
import { FavoritePlaceItem } from '../../components/favorite-page/favorite-place-item/favorite-place-item';
import { APIRoute, City } from '../../const';
import { Footer } from '../../components/layout/footer/footer';
import { FavoritesEmpty } from '../../components/favorite-page/favorites-empty/favorites-empty';
import { api } from '../../store';
import { useCallback, useEffect, useState } from 'react';
import { handleError } from '../../api/handle-error';
import { Loader } from '../../components/loader/loader';

export function Favorites() {
  const [favoritesPlaces, setFavoritesPlaces] = useState<PlaceInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

  const allCities = Object.keys(City);

  const fetchFavoritesPlaces = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.get<PlaceInfo[]>(APIRoute.Favorite);
      setFavoritesPlaces(data);
    } catch (e) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchFavoritesPlaces();
  }, [fetchFavoritesPlaces]);

  return (
    <div className='page'>
      <Header/>
      {isLoading ? (
        <Loader/>
      ) : (
        favoritesPlaces.length === 0 ? (
          <FavoritesEmpty/>
        ) : (
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
                      onRefresh={fetchFavoritesPlaces}
                    />
                  ))}
                </ul>
              </section>
            </div>
          </main>
        ))
      }
      <Footer/>
    </div>
  );
}
