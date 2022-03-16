import React, { useState } from 'react';
import { PlaceCard } from '../place-card/place-card';
import { PlaceInfo } from '../../types/client';
import { Map } from '../map/map';
import { City } from '../../const';
import { Sorter } from '../sorter/sorter';
import { URLSearchParamsInit } from 'react-router-dom';

interface CitiesProps {
  placeInfoList: PlaceInfo[];
  activeCity: City;
  onSetSortType: (nextInit: URLSearchParamsInit) => void;
}

export function Places(props: CitiesProps) {
  const { placeInfoList, activeCity, onSetSortType } = props;
  const [activePlaceCardId, setActivePlaceCardId] = useState<number>(-1);

  return (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{placeInfoList.length} places to stay in {activeCity}</b>
        <Sorter onSetSortType={onSetSortType}/>
        <div className='cities__places-list places__list tabs__content'>
          {placeInfoList.map((place) => (
            <PlaceCard placeInfo={place} key={place.id} onSetActivePlaceId={setActivePlaceCardId}/>))}
        </div>
      </section>
      <div className='cities__right-section'>
        <Map anchorPoint={placeInfoList[0].city.location}
          points={placeInfoList.map((place) => ({ ...place.location, placeId: place.id }))}
          activePlaceId={activePlaceCardId}
          isMainPage
          key={activeCity}
        />
      </div>
    </div>
  );
}
