import { capitaliseFirstLetter } from '../../../helpers';

interface FeaturesProps {
  type: string;
  bedrooms: number;
  adults: number;
}

export function Features(props: FeaturesProps) {
  const { type, bedrooms, adults } = props;
  return (
    <ul className='property__features'>
      <li className='property__feature property__feature--entire'>
        {capitaliseFirstLetter(type)}
      </li>
      <li className='property__feature property__feature--bedrooms'>
        {`${bedrooms} Bedrooms`}
      </li>
      <li className='property__feature property__feature--adults'>
        {`Max ${adults} adults`}
      </li>
    </ul>
  );
}
