import { GalleryImage } from '../gallery-image/gallery-image';

interface GalleryProps {
  imageUrlList: string[]
}

export function Gallery(props: GalleryProps) {
  const { imageUrlList } = props;
  return (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {imageUrlList.slice(0, 6).map((imageUrl) => <GalleryImage imageUrl={imageUrl} key={imageUrl}/>)}
      </div>
    </div>
  );
}
