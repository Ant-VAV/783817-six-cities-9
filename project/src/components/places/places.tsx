import React, { useState } from 'react';
import { PlaceCard } from '../place-card/place-card';
import { PlaceInfo } from '../../types/client';
import { Map } from '../map/map';

interface CitiesProps {
  placeInfoList: PlaceInfo[];
}

export function Places(props: CitiesProps) {
  const { placeInfoList } = props;
  const [activePlaceCardId, setActivePlaceCardId] = useState<number>(-1);

  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{placeInfoList.length} places to stay in Amsterdam</b>
        <form className='places__sorting' action='#' method='get'>
          <span className='places__sorting-caption'>Sort by</span>
          <span className='places__sorting-type' tabIndex={0}>
                    Popular
            <svg className='places__sorting-arrow' width='7' height='4'>
              <use xlinkHref='#icon-arrow-select'/>
            </svg>
          </span>
          <ul className='places__options places__options--custom places__options--opened'>
            <li className='places__option places__option--active' tabIndex={0}>Popular</li>
            <li className='places__option' tabIndex={0}>Price: low to high</li>
            <li className='places__option' tabIndex={0}>Price: high to low</li>
            <li className='places__option' tabIndex={0}>Top rated first</li>
          </ul>
        </form>
        <div className='cities__places-list places__list tabs__content'>
          {placeInfoList.map((place) => (
            <PlaceCard placeInfo={place} key={place.id} onSetActivePlaceId={setActivePlaceCardId}/>))}
        </div>
      </section>
      <div className='cities__right-section'>
        <Map anchorPoint={placeInfoList[0].city.location}
          points={placeInfoList.map((place) => ({ ...place.location, placeId: place.id }))}
          activePlaceId={activePlaceCardId}
          className='cities__map map'
        />
      </div>
    </div>
  );
}
