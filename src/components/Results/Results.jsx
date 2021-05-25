import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../contexts/DataContext'
import Result from './Result/Result'
import LoadingAnimation from '../LoadingAnimaton/LoadingAnimation'
import styles from './Results.module.css'

const Results = () => {
    
    const [newConfirmed, setNewConfirmed] = useState(null)
    const [newRecovered, setNewRecovered] = useState(null)
    const [newDeaths, setNewDeaths] = useState(null)
    const [totalRecovered, setTotalRecovered] = useState(null)
    const [totalDeaths, setTotalDeaths] = useState(null)
    const [totalConfirmed, setTotalConfirmed] = useState(null)
    
    const {values, countryValues, gOrC, isLoading} = useContext(DataContext)
    const countryName =  gOrC.isGlobal ? "Global" : countryValues.countryName
    
    useEffect(() => {
        const getData = async () => {
            if(!isLoading) {
                const { NewConfirmed, NewRecovered, NewDeaths, TotalRecovered, TotalDeaths, TotalConfirmed } = values
                setNewConfirmed(!gOrC.isGlobal ? NewConfirmed : values.Active)
                setNewRecovered(NewRecovered)
                setNewDeaths(NewDeaths)
                setTotalConfirmed(await TotalConfirmed)
                setTotalRecovered(await TotalRecovered)
                setTotalDeaths(await TotalDeaths)
            }
        }
        
        getData()
        
    }, [isLoading, values, countryName])
    
    return (
        <>
        {
            isLoading ? <LoadingAnimation /> : 
            <section className={`${styles.resultsContainer}`}>
                <Result country={countryName} resultText="New Confirmed" borderColor="lightseagreen" resultValue={newConfirmed} />
                <Result country={countryName} resultText="New Recovered" borderColor="lightseagreen" resultValue={newRecovered} />
                <Result country={countryName} resultText="New Deaths" borderColor="lightseagreen" resultValue={newDeaths} />
                <Result country={countryName} resultText="Total Confirmed" borderColor="lightskyblue" resultValue={totalConfirmed} />
                <Result country={countryName} resultText="Total Recovered" borderColor="lightseagreen" resultValue={totalRecovered} />
                <Result country={countryName} resultText="Total Deaths" borderColor="lightcoral" resultValue={totalDeaths} />
            </section>
        }
        </>
    )
}

export default Results
