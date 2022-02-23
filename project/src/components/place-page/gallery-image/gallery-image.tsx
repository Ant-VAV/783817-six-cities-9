interface GalleryImageProps {
  imageUrl: string;
}

export function GalleryImage(props: GalleryImageProps) {
  const { imageUrl } = props;
  return (
    <div className='property__image-wrapper'>
      <img className='property__image' src={imageUrl} alt='Img studio'/>
    </div>
  );
}
