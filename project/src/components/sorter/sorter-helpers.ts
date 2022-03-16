import { SortType } from '../../const';

export function getSortTypeText(sortType: SortType) {
  switch (sortType) {
    case SortType.PriceAsc:
      return 'Price: low to high';
    case SortType.PriceDesc:
      return 'Price: high to low';
    case SortType.RatedFirst:
      return 'Top rated first';
    case SortType.Popular:
      return 'Popular';
    default:
      return '';
  }
}
