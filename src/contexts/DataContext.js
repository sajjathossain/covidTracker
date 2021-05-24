import React, { useState, useEffect,createContext } from 'react'
import { fetchGlobalData, fetchCountryData, toggleGlobal, isGlobal } from '../Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [countryData, setCountryData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {        
        const collectData = async () => {
            setData(await fetchGlobalData())
            console.log(isGlobal);
            await toggleGlobal()
            console.log(isGlobal);
            setIsLoading(false)
        }


        collectData()
    }, [])

    return (
        <DataContext.Provider value={{globalValues: data.Global, countryValues: { countryData, setCountryData }, isLoading}}>
            { props.children }
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}