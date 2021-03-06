import { Header } from '../../components/layout/header/header';
import { PlaceInfo } from '../../types/client';
import { FavoritePlaceItem } from '../../components/favorite-page/favorite-place-item/favorite-place-item';
import { APIRoute, CHECK_NUMBER_OF_ENTITIES, City } from '../../const';
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

  const isFavoritesEmpty = favoritesPlaces.length === CHECK_NUMBER_OF_ENTITIES;

  return (
    <div className='page'>
      <Header/>
      {isLoading ? (
        <Loader/>
      ) : (
        <main className={`page__main page__main--favorites ${isFavoritesEmpty ? 'page__main--favorites-empty' : ''}`}>
          <div className='page__favorites-container container'>
            <section className={`favorites ${isFavoritesEmpty ? 'favorites--empty' : ''}`}>
              {isFavoritesEmpty ? (
                <FavoritesEmpty/>
              ) : (
                <>
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
                </>
              )}
            </section>
          </div>
        </main>
      )}

      <Footer/>;
    </div>
  );
}
