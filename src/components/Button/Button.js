import styles from './Button.module.css';
import PropTypes from "prop-types";

const Button = ({ onClick }) => (
  <div className={styles.buttonBox}>
    <button className={styles.Button} onClick={onClick}>
      Load more...
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;