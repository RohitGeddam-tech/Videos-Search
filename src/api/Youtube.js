import axios from 'axios';

const KEY = 'AIzaSyC6kz2V5NO8xu0L1B--PFhkF9MdPYVvGXk';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
