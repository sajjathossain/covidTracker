import { useState, useEffect } from 'react'
import LoadingAnimation from '../../../LoadingAnimaton/LoadingAnimation'
import styles from './TabPanelComponent.module.css'

const TabPanelComponent = ({ countries, cmp }) => {
  const [topCountries, setTopCountries] = useState(null)

  useEffect(() => {
    const getTopCountry = async () => {
      try {
        setTopCountries(await countries)
      } catch (error) {
        console.log(error);
      }
    }

    getTopCountry()
  }, [countries, topCountries])
  
  return (
    topCountries === null ? <LoadingAnimation /> :
    <ul className={styles.tabPanelComponent}>
      {
        topCountries.map((country) => {
          return (
          <li key={topCountries.indexOf(country)} className={`${styles.countryName} applyBoxShadow`}>
            <span>{country.Country}</span>
            <span>{country[cmp]}</span>
          </li>
          )
        })
      }
    </ul>
  )
}



export default TabPanelComponent