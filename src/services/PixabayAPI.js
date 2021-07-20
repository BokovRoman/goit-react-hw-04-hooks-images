import axios from 'axios';

   const BASE_URL = 'https://pixabay.com/api/';
    const AUTHORIZATION_KEY = 'key=21271136-bb8fcb5deeeca7c55db92c216';

const fetchGalleryAPI = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&${AUTHORIZATION_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    // .then(response => {
    //   // console.log(response.data));
    //   this.setState({ pictures: response.data });
    // })
    .then(response => response.data.hits);
  // .catch(error => this.setState({ error }));
};

export default fetchGalleryAPI;