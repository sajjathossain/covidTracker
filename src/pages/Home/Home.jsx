import * as Components from '../../components/'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`${styles.homeContainer} wrapper`}>
      <div className={styles.results}>
        <Components.Results />
      </div>
      <div className={styles.topCountry}>
        <Components.TopCountry />
      </div>
      <div className={styles.chart}>
        <Components.Chart />
      </div>
    </section>
    );
};

export default Home;