import React from 'react';
import { URLSearchParamsInit } from 'react-router-dom';
import { SearchParams, SortType } from '../../const';
import { getSortTypeText } from './sorter-helpers';

interface SorterOptionProps {
  isActive: boolean;
  sortType: SortType
  onSetSortType: (nextInit: URLSearchParamsInit) => void;
  onSetSelectorOpened: (value: boolean) => void;
}

export function SorterOption(props: SorterOptionProps) {
  const { isActive, sortType, onSetSortType, onSetSelectorOpened } = props;

  const handleSortItemClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSetSortType({ [SearchParams.Sort]: sortType });
    onSetSelectorOpened(false);
  };

  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}
      onClick={handleSortItemClick}
    >
      {getSortTypeText(sortType)}
    </li>
  );
}
