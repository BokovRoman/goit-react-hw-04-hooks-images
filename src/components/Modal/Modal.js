import React, { Component } from "react";
import styles from './Modal.module.css';
import PropTypes from "prop-types";


class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener("keydown", this.onEscapeKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscapeKeydown);
  }

  onEscapeKeydown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { src, alt } = this.props;

    return (
      <div className={styles.Overlay} onClick={this.onBackdropClick}>
        <div className={styles.Modal}>
          <img className={styles.img} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string,
  alt: PropTypes.string,
};


export default Modal;