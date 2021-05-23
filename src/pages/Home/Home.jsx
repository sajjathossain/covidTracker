import Results from '../../components/Results/Results';
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={`${styles.homeContainer} wrapper`}>
      <Results />
    </section>
    );
};

export default Home;