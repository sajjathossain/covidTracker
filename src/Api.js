import axios from 'axios';

const URI = "https://api.covid19api.com/summary"

const fetchData = async () => {
    const { data } = await axios.get(URI)

    return data
}

export {
    fetchData
}