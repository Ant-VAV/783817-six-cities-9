import React from 'react';
import { CityLink } from './city-link';

interface TabListItemProps {
  cityName: string;
  isActive: boolean;
}

export function CityListItem(props: TabListItemProps) {
  const { cityName, isActive } = props;
  return (
    <li className='locations__item'>
      <CityLink isActive={isActive} cityName={cityName}>
        <span>{cityName}</span>
      </CityLink>
    </li>
  );
}
