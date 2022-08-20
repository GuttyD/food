import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer aeE0t0k0HMbtx8ZvXt0GI0M9ZtARpY87QojvYpoQDbEGrpKgBABE6dBQK1Kgum5SVAkLcTNGQvBGrEmfonggR7A7epBA47XbCufwC_LIOq80UtuY4T5uASCbM-zjYnYx'
    }
});