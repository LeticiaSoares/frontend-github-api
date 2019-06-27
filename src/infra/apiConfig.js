import axios from 'axios'

const config = {
    baseURL : 'https://api.github.com',
    timeout: 5000,
    headers: ''
}

function api(){
    return axios.create(config)
 }

 export default api

