import PropTypes from "prop-types";
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      className={styles.image}
      src={src} alt={alt} />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};


export default ImageGalleryItem;