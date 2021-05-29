import axios from 'axios';
const URI = "https://api.covid19api.com"

const fetchGlobalData = async () => {
    const { data } = await axios.get(`${URI}/summary`)
    
    return data
}

export {
    fetchGlobalData
}