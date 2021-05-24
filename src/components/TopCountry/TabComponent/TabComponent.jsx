import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import styles from './TabComponent.module.css'

const TabComponent = () => {
  return (
    <>
      <Tabs className={styles.tabs}>
        <TabList className={styles.tabList}>
          <Tab className={styles.tab}>
            {/* <Button className={styles.button}> */}
                Recovered
            {/* </Button> */}
          </Tab>
          <Tab className={styles.tab}>
            {/* <Button className={styles.button}> */}
              Infected
            {/* </Button> */}
          </Tab>
          <Tab className={styles.tab}>
            {/* <Button className={styles.button}> */}
              Deaths
            {/* </Button> */}
          </Tab>
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
