import axios from 'axios';

const fetchGlobalData = async () => {
    const URI = "https://api.covid19api.com"
    try {
        const { data } = await axios.get(`${URI}/summary`)

        return data
    } catch(error) {
        console.log(error)
    }
}

export {
    fetchGlobalData
}