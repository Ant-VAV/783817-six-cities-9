import React from 'react';

interface TabListItemProps {
  cityName: string;
  isActive?: boolean;
}

export function TabListItem(props: TabListItemProps) {
  const { cityName, isActive = false } = props;
  return (
    <li className='locations__item'>
      <a className={`locations__item-link tabs__item ${isActive && 'tabs__item--active'}`}
        href={isActive ? undefined : `/${cityName}`}
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
}
