import React, { useState } from 'react';
import { SortType } from '../../const';
import { SorterOption } from './sorter-option';
import { URLSearchParamsInit } from 'react-router-dom';
import { getSortTypeText } from './sorter-helpers';
import { useAppSelector } from '../../hooks/state';

interface SorterProps {
  onSetSortType: (nextInit: URLSearchParamsInit) => void;
}

export function Sorter(props: SorterProps) {
  const { onSetSortType } = props;
  const [isOpened, setIsOpened] = useState<boolean>();
  const activeSortType = useAppSelector((state) => state.sortType);

  const handlePopupClick = () => setIsOpened((prevState) => !prevState);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by </span>
      <span className='places__sorting-type' tabIndex={0} onClick={handlePopupClick}>
        {getSortTypeText(activeSortType)}
        <svg className='places__sorting-arrow' width='7' height='4'><use xlinkHref='#icon-arrow-select'/></svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.keys(SortType).map((value) => (
          <SorterOption isActive={value === activeSortType} sortType={value as SortType} key={value}
            onSetSortType={onSetSortType} onSetSelectorOpened={setIsOpened}
          />
        ))}
      </ul>
    </form>
  );
}
