import React, { createContext, useEffect, useState } from 'react'

import { fetchGlobalData } from '../Api/Api';

const DataContext = createContext()

const DataProvider = (props) => {
    const [globalData, setGlobalData] = useState([])
    const [countryData, setCountryData] = useState([])
    const [isGlobal, setIsGlobal] = useState(false)
    const [countryName, setCountryName] = useState(null)
    const [allCountryName, setAllCountryName] = useState([])
    const [topConfirmedCountries, setTopConfirmedCountries] = useState([])
    const [topRecoveredCountries, setTopRecoveredCountries] = useState([])
    const [topCountriesByDeath, setTopCountriesByDeath] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const value = {
        values: globalData.Global,
        countryDatas: countryData,
        countryValues: { countryName, setCountryName },
        allCountryName,
        gOrC: { isGlobal, setIsGlobal },
        loading: { isLoading, setIsLoading },
        topConfirmedCountries,
        topRecoveredCountries,
        topCountriesByDeath,
        isError
    }

    
    const getAllCountryName = async () => {
        try {
            const countries = await globalData.Countries
            let result = []
            for(let country in countries){
                result.push(countries[country].Country)
            }
            
            setAllCountryName(result)
        } catch(err) {
            console.log(err)
        }
    }
    
    const setCountryValues = () => {
        try{
            const result = globalData.Countries.filter(obj => {
                return obj.Country === countryName
            })
            return result
        } catch(err) {
            console.log(err)
        }
        
    }
    
    const getTopCountriesByConfirmed = async () => {
        try {            
            let confirmedCountries = await globalData.Countries.slice(0)
            confirmedCountries = await confirmedCountries.sort((a, b) => {
                return b.TotalConfirmed - a.TotalConfirmed
            })
            
            let recoveredCountries = await globalData.Countries.slice(0)
            recoveredCountries = await recoveredCountries.sort((a, b) => {
                return b.TotalRecovered - a.TotalRecovered
            })
            
            let deathsCountries = await globalData.Countries.slice(0)
            deathsCountries = await deathsCountries.sort((a, b) => {
                return b.TotalDeaths - a.TotalDeaths
            })
            
            setTopConfirmedCountries(confirmedCountries.slice(0, 10))
            setTopRecoveredCountries(recoveredCountries.slice(0, 10))
            setTopCountriesByDeath(deathsCountries.slice(0, 10))
        } catch (error) {
            console.log(error)
        }
        
    }
    
    useEffect(() => {        
        const collectData = async () => {
            try {
                setGlobalData(await fetchGlobalData())
                
                if(countryName !== null) {
                    const result = await setCountryValues()
                    setCountryData(await result)
                }

                await getAllCountryName()
                await getTopCountriesByConfirmed()
                setIsLoading(false)
                setIsError(false)
            } catch (error) {
                setIsError(true)
                // console.log(error)
            }
        }
        
        collectData()
    }, [countryName, isLoading, isError])
    
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