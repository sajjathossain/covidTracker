import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import TabPanelComponent from './TobPanelComponent/TabPanelComponent'
import "@reach/tabs/styles.css";
import styles from './TabComponent.module.css'

const TabComponent = () => {
  return (
    <>
      <Tabs className={styles.tabs}>
        <TabList className={styles.tabList}>
          <Tab className={styles.tab}>
            Recovered
          </Tab>
          <Tab className={styles.tab}>
            Infected
          </Tab>
          <Tab className={styles.tab}>
            Deaths
          </Tab>
        </TabList>
        <TabPanels className={styles.tabPanels}>
          <TabPanel className={styles.tabPanel}>
            <TabPanelComponent countries={"Bangladesh"}/>
          </TabPanel>
          <TabPanel>
            <TabPanelComponent countries={"India"}/>
          </TabPanel>
          <TabPanel>
            <TabPanelComponent countries={"Chaina"}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default TabComponent
