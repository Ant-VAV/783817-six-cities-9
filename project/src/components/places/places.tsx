import React, { useEffect, useState } from 'react';
import { PlaceCard } from '../place-card/place-card';
import { PlaceInfo } from '../../types/client';
import { Map } from '../map/map';
import { City, SearchParams } from '../../const';
import { Sorter } from '../sorter/sorter';
import { useSearchParams } from 'react-router-dom';
import { getFilteredPlaceListInfo } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/state';
import { PlacesEmpty } from './places-empty';
import { changeSortType } from '../../store/actions';

interface PlacesProps {
  allPlaces: PlaceInfo[];
  activeCity: City;
  onSetIsNoPlaces: (value: boolean) => void;
}

export function Places(props: PlacesProps) {
  const { activeCity, allPlaces, onSetIsNoPlaces } = props;
  const [activePlaceCardId, setActivePlaceCardId] = useState<number>(-1);
  const [placeInfoList, setPlaceInfoList] = useState<PlaceInfo[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const sortType = useAppSelector((state) => state.sortType);

  useEffect(() => {
    const currentPlaces = getFilteredPlaceListInfo(allPlaces, activeCity, sortType);
    if (currentPlaces.length === 0) {
      onSetIsNoPlaces(true);
    }
    setPlaceInfoList(currentPlaces);
  }, [allPlaces, activeCity, sortType, onSetIsNoPlaces]);

  useEffect(() => {
    dispatch(changeSortType(searchParams.get(SearchParams.Sort)));
  }, [searchParams, dispatch]);

  return placeInfoList.length === 0 ? (
    <PlacesEmpty activeCity={activeCity}/>
  ) : (
    <div className='cities__places-container container'>
      <section className='cities__places places'>
        <h2 className='visually-hidden'>Places</h2>
        <b className='places__found'>{placeInfoList.length} places to stay in {activeCity}</b>
        <Sorter onSetSortType={setSearchParams}/>
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
          key={placeInfoList[0].city.name}
        />
      </div>
    </div>
  );
}
