import * as images from '../../img'
import styles from './About.module.css'

const About = () => {
  return (
    <section className={`wrapper ${styles.container}`}>
      <div className={styles.card}>
        <h1 className={styles.cardHeader}>
          About
        </h1>
        <div className={styles.cardContent}>
          <div className={styles.contentText}>
            <p>
            This is a simple web application which helps one find out the cuurent situation of Covid-19. Here one will be able to find daily updates. Global and Country wise data are available here. It's an open-source project. It's just a simple gui client for covid-19 api, from where the data is collected. Many thanks to the developers of covid-19 api for making it freely available (premium also available).
            </p>
            <br />
            <p>If you find any problem or want feature to be added, the please contact the developer of the website. Contact details are available in the Contact section of the page.</p>
          </div>
          <div className={styles.contentImage}>
            <img src={images.seoSvg} alt="image" className={styles.img}/>
          </div>
        </div>
      </div>
    </section>
    );
};

export default About;