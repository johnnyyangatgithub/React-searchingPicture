import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kk83JAY1OnMOAwot3xm5AOpyZ8gxokMTHwnHL5cVmVg'
    }
});