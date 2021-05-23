import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import styles from './TabComponent.module.css'

const TabComponent = () => {
  return (
    <>
      <Tabs className={styles.tabs}>
        <TabList className={styles.tabList}>
          <Tab className={styles.tab}>Recovered</Tab>
          <Tab className={styles.tab}>Infected</Tab>
          <Tab className={styles.tab}>Deaths</Tab>
        </TabList>
        <TabPanels className={styles.tabPanels}>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default TabComponent
