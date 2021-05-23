import { useEffect, useState, useContext } from 'react';
import { DataContext } from '../../Contexts/DataContext'
import Result from './Result/Result'
import LoadingAnimation from '../LoadingAnimaton/LoadingAnimation'
import styles from './Results.module.css'

const Results = () => {
    
    const [totalRecovered, setTotalRecovered] = useState(null)
    const [totalDeaths, setTotalDeaths] = useState(null)
    const [totalConfirmed, setTotalConfirmed] = useState(null)
    
    const {value, countryValues, isLoading} = useContext(DataContext)
    const { countryData, setCountryData } = countryValues
    const {data, setData} = value
    const { Countries, Global } = data
    
    useEffect(() => {
        
        const getData = async () => {
            if(!isLoading) {
                const { TotalRecovered, TotalDeaths, TotalConfirmed } = Global
                setTotalRecovered(await TotalRecovered)
                setTotalDeaths(await TotalDeaths)
                setTotalConfirmed(await TotalConfirmed)
            }
        }
        
        getData()
        
    }, [isLoading, Countries, Global])
    
    return (
        <>
        {
            isLoading ? <LoadingAnimation /> : 
            <section className={`${styles.resultsContainer}`}>
                <Result country="Global" resultText="Recovered" borderColor="lightseagreen" resultValue={totalRecovered} />
                <Result country="Global" resultText="Infected" borderColor="lightblue" resultValue={totalConfirmed} />
                <Result country="Global" resultText="Deaths" borderColor="lightcoral" resultValue={totalDeaths} />
            </section>
        }
        </>
    )
}

export default Results
