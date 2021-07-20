import React, { Component } from 'react';
import PropTypes from "prop-types";
import styles from './Searchbar.module.css';



class Searchbar extends Component {
    state = {
        query: '',
    };

    onSearchInputChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };
    
    onSearchFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };
    
    render() {
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.onSearchFormSubmit}>
                    <button type="submit" className={styles.button}>
                    <span className={styles.label}>Search</span>
                    </button>

                    <input
                        value={this.state.query}
                        onChange={this.onSearchInputChange}
                    className={styles.input}
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
    
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
