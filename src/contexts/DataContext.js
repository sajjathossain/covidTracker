import React, { useState, useEffect,createContext } from 'react'
import { fetchGlobalData, fetchCountryData, fetchAllCountryNames } from '../Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [isGlobal, setIsGlobal] = useState(true)
    const [countryName, setCountryName] = useState('')
    const [allCountryName, setAllCountryName] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const value = {
        globalValues: data.Global,
        countryValues: { countryName, setCountryName },
        allCountryName,
        gOrC: { isGlobal, setIsGlobal },
        isLoading
    }
    
    useEffect(() => {        
        const collectData = async () => {
            if(isGlobal) {
                setData(await fetchGlobalData())
            }
            else {
                setData(await fetchCountryData(countryName))

            }
            
            setAllCountryName(await fetchAllCountryNames())
            setIsLoading(false)
        }
        
        collectData()
    }, [isGlobal, countryName])
    
    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}

export {
    DataContext,
    DataProvider
}