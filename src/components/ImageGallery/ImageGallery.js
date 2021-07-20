import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => (
  <ul className={styles.ImageGallery} onClick={onImageClick}>
    {images.map(({ webformatURL, tags, id }) => (
      <ImageGalleryItem key={id} src={webformatURL} alt={tags} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;