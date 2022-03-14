import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface CityLinkProps {
  cityName: string;
  isActive: boolean;
}

export function CityLink(props: PropsWithChildren<CityLinkProps>) {
  const { cityName, isActive, children } = props;
  return (isActive ? (
    <div className={'locations__item-link tabs__item tabs__item--active'}>
      {children}
    </div>
  ) : (
    <Link className={'locations__item-link tabs__item'}
      to={`/${cityName}`}
    >
      {children}
    </Link>
  )
  );
}
