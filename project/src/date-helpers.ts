const padTwoZeros = (dateValue: number): string => (dateValue.toString().padStart(2, '0'));

export const getDateForAttribute = (date: Date): string =>
  `${date.getFullYear()}-${padTwoZeros(date.getMonth() + 1)}-${padTwoZeros(date.getDate())}`;

export const dateSortFunction = (a: string, b: string): number => (new Date(b).getTime() - new Date(a).getTime());
