import React, { useState, useEffect,createContext } from 'react'
import { fetchData } from '../Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [countryData, setCountryData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {        
        const collectData = async () => {
            setData(await fetchData())
            setIsLoading(false)
        }

        collectData()
    }, [])

    return (
        <DataContext.Provider value={{value: {data, setData},countryValues: { countryData, setCountryData }, isLoading}}>
            { props.children }
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}