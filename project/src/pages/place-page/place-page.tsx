import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/layout/header/header';
import React, { useEffect, useState } from 'react';
import { PlaceInfo } from '../../types/client';
import { getPlaceInfo } from '../../mocks/place-info';
import { Page } from '../../const';
import { Gallery } from '../../components/place-page/gallery/gallery';
import { Rating } from '../../components/rating/rating';
import { Features } from '../../components/place-page/features/features.';
import { Inside } from '../../components/place-page/inside/inside';
import { NearPlaces } from '../../components/place-page/near-places/near-places';
import { PlaceHostBlock } from '../../components/place-page/place-host-block/place-host-block';
import { ReviewsBlock } from '../../components/place-page/reviews-block/reviews-block';
import { Map } from '../../components/map/map';
import { getPlaceListInfo } from '../../mocks/place-list-info';

interface PlacePageProps {
  isLoggedIn: boolean;
}

export function PlacePage(props: PlacePageProps) {
  const { isLoggedIn } = props;
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState<PlaceInfo>();
  const [activePlaceCardId, setActivePlaceCardId] = useState<number>(-1);
  const [nearPlaces, setNearPlaces] = useState<PlaceInfo[]>([]);

  useEffect(() => {
    setNearPlaces(getPlaceListInfo().slice(0, 3));
  }, []);

  useEffect(() => {
    if (id) {
      const placeInfo = getPlaceInfo(id);
      if (!placeInfo) {
        navigate(Page.Main);
      }
      setPlace(getPlaceInfo(id));
    }
  }, [id, navigate]);

  return (
    <div className='page page--gray page--main'>
      <Header isLoggedIn={isLoggedIn}/>
      {place && (
        <main className='page__main page__main--property'>
          <section className='property'>
            <Gallery imageUrlList={place.images}/>
            <div className='property__container container'>
              <div className='property__wrapper'>
                {place.isPremium && (
                  <div className='property__mark'>
                    <span>Premium</span>
                  </div>
                )}
                <div className='property__name-wrapper'>
                  <h1 className='property__name'>
                    {place.title}
                  </h1>
                  <button
                    className={`property__bookmark-button button ${place.isFavorite ? 'property__bookmark-button--active' : ''}`}
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
                    <Rating rating={place.rating}/>
                  </div>
                  <span className='property__rating-value rating__value'>{place.rating}</span>
                </div>
                <Features type={place.type} bedrooms={place.bedrooms} adults={place.maxAdults}/>
                <div className='property__price'>
                  <b className='property__price-value'>&euro;{place.price}</b>
                  <span className='property__price-text'>&nbsp;night</span>
                </div>
                <Inside goods={place.goods}/>`
                <PlaceHostBlock host={place.host} description={place.description}/>
                <ReviewsBlock isLoggedIn placeId={place.id}/>
              </div>
            </div>
            <Map anchorPoint={place.location}
              points={nearPlaces.map((nearPlace) => ({ ...nearPlace.location, placeId: nearPlace.id }))}
              activePlaceId={activePlaceCardId}
              className='property__map map'
            />
          </section>
          {nearPlaces.length > 0 && (<NearPlaces nearPlaces={nearPlaces} onSetActivePlaceId={setActivePlaceCardId}/>)}
        </main>
      )}
    </div>);
}
