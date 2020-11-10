import axios from 'axios';

const KEY = 'AIzaSyAEQCXE8wqFxOkP2CsnKJJTZc-ES4eCxMQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});