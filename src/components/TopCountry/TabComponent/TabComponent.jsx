import { useState, useEffect, useContext } from 'react'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import TabPanelComponent from './TobPanelComponent/TabPanelComponent'
import { DataContext } from '../../../contexts/DataContext'
import "@reach/tabs/styles.css";
import styles from './TabComponent.module.css'

const TabComponent = () => {
  const [currentTab, setCurrentTab] = useState(1)
  const [confirmed, setConfirmed] = useState([])
  const [recovered, setRecovered] = useState([])
  const [deaths, setDeaths] = useState([])
  const { topConfirmedCountries, topRecoveredCountries, topCountriesByDeath } = useContext(DataContext)

  useEffect(() => {

    const getData = async () => {
      try {
        setConfirmed(await topConfirmedCountries)
        setRecovered(await topRecoveredCountries)
        setDeaths(await topCountriesByDeath)
      } catch (error) {
        console.log(error)
      }
    }

    getData()

    }, [topConfirmedCountries, topRecoveredCountries, topCountriesByDeath])

  return (
    <div className={styles.tabBg}>
      <Tabs className={`${styles.tabs}`}>
        <TabList className={styles.tabList} >
          <Tab className={currentTab === 1 ? `${styles.active} ${styles.activeInfected}` : `${styles.tab}`} onMouseDown={() => {
            setCurrentTab(1);
          }}>
            Infected
          </Tab>
          <Tab className={currentTab === 2 ? `${styles.active} ${styles.activeRecovered}` : `${styles.tab}`} onMouseDown={() => {
            setCurrentTab(2);
          }}>
            Recovered
          </Tab>
          <Tab className={currentTab === 3 ? `${styles.active} ${styles.activeDeaths}` : `${styles.tab}`} onMouseDown={() => {
            setCurrentTab(3);
          }}>
            Deaths
          </Tab>
        </TabList>
        <TabPanels className={styles.tabPanels}>
          <TabPanel className={styles.tabPanel}>
            <TabPanelComponent countries={confirmed} cmp={"TotalConfirmed"} />
          </TabPanel>
          <TabPanel>
            <TabPanelComponent countries={recovered} cmp={"TotalRecovered"} />
          </TabPanel>
          <TabPanel>
            <TabPanelComponent countries={deaths} cmp={"TotalDeaths"} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default TabComponent
