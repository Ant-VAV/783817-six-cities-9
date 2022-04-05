import { useParams } from 'react-router-dom';
import { Header } from '../../components/layout/header/header';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Gallery } from '../../components/place-page/gallery/gallery';
import { Rating } from '../../components/rating/rating';
import { Features } from '../../components/place-page/features/features.';
import { Inside } from '../../components/place-page/inside/inside';
import { NearPlaces } from '../../components/place-page/near-places/near-places';
import { PlaceHostBlock } from '../../components/place-page/place-host-block/place-host-block';
import { ReviewsBlock } from '../../components/place-page/reviews-block/reviews-block';
import { Map } from '../../components/map/map';
import { api } from '../../store';
import { PlaceInfo } from '../../types/client';
import { APIRoute } from '../../const';
import { handleError } from '../../api/handle-error';
import { Loader } from '../../components/loader/loader';
import { getPlaceTypeName } from '../../helpers';

export function PlacePage() {
  const { id } = useParams();
  const [placeInfo, setPlaceInfo] = useState<PlaceInfo>();
  const [nearPlaces, setNearPlaces] = useState<PlaceInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>();

  async function getPlaceInfo(placeDataPlaceId: string) {
    const placeData = (await api.get<PlaceInfo>(`${APIRoute.Hotels}/${placeDataPlaceId}`)).data;
    setPlaceInfo(placeData);
  }

  async function getNearPlaces(nearbyPlaceDataId: string) {
    const nearPlacesData = (await api.get<PlaceInfo[]>(`${APIRoute.Hotels}/${nearbyPlaceDataId}/nearby`)).data;
    setNearPlaces(nearPlacesData);
  }

  const fetchData = useCallback(async (placeId: string) => {
    try {
      setIsLoading(true);
      await getPlaceInfo(placeId);
      await getNearPlaces(placeId);
    } catch (e) {
      handleError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id, fetchData]);

  const mapPoints = useMemo(() => {
    if (placeInfo) {
      return nearPlaces.map((nearPlace) => ({ ...nearPlace.location, placeId: nearPlace.id })).concat({
        ...placeInfo.location,
        placeId: placeInfo.id,
      });
    }
    return [];
  }, [placeInfo, nearPlaces]);

  return (
    <div className='page page--gray page--main'>
      <Header/>
      <main className='page__main page__main--property'>
        {isLoading ? (<Loader/>) :
          (placeInfo && (
            <>
              <section className='property'>
                <Gallery imageUrlList={placeInfo.images}/>
                <div className='property__container container'>
                  <div className='property__wrapper'>
                    {placeInfo.isPremium && (
                      <div className='property__mark'>
                        <span>Premium</span>
                      </div>
                    )}
                    <div className='property__name-wrapper'>
                      <h1 className='property__name'>
                        {placeInfo.title}
                      </h1>
                      <button
                        className={`property__bookmark-button button ${placeInfo.isFavorite ? 'property__bookmark-button--active' : ''}`}
                        type='button'
                      >
                        <svg className='property__bookmark-icon' width='31' height='33'>
                          <use xlinkHref='#icon-bookmark'/>
                        </svg>
                        <span className='visually-hidden'>To bookmarks</span>
                      </button>
                    </div>
                    <div className='property__rating rating'>
                      <div className='property__stars rating__stars'>
                        <Rating rating={placeInfo.rating}/>
                      </div>
                      <span className='property__rating-value rating__value'>{placeInfo.rating}</span>
                    </div>
                    <Features type={getPlaceTypeName(placeInfo.type)} bedrooms={placeInfo.bedrooms} adults={placeInfo.maxAdults}/>
                    <div className='property__price'>
                      <b className='property__price-value'>&euro;{placeInfo.price}</b>
                      <span className='property__price-text'>&nbsp;night</span>
                    </div>
                    <Inside goods={placeInfo.goods}/>`
                    <PlaceHostBlock host={placeInfo.host} description={placeInfo.description}/>
                    <ReviewsBlock placeId={placeInfo.id}/>
                  </div>
                </div>
                <Map anchorPoint={placeInfo.location}
                  points={mapPoints}
                  activePlaceId={placeInfo.id}
                />
              </section>
              {nearPlaces.length > 0 && (
                <NearPlaces nearPlaces={nearPlaces} onRefresh={() => getNearPlaces(id!)}/>
              )}
            </>
          ))}
      </main>
    </div>);
}
