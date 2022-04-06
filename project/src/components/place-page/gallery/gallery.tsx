import { GalleryImage } from '../gallery-image/gallery-image';

const STARTING_GALLERY_IMAGE = 0;
const MAX_GALLERY_IMAGES = 6;

interface GalleryProps {
  imageUrlList: string[]
}

export function Gallery(props: GalleryProps) {
  const { imageUrlList } = props;
  return (
    <div className='property__gallery-container container'>
      <div className='property__gallery'>
        {imageUrlList.slice(STARTING_GALLERY_IMAGE, MAX_GALLERY_IMAGES).map((imageUrl) => <GalleryImage imageUrl={imageUrl} key={imageUrl}/>)}
      </div>
    </div>
  );
}
