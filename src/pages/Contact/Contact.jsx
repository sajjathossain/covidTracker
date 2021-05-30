import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section className={`wrapper ${styles.container}`}>
      <div className={`${styles.left} applyBoxShadow`}>
        <iframe scrollbar="hidden" src="https://sajjathossain.github.io/sajjathossain/" frameborder="0" className={styles.iFrame}></iframe>
      </div>
      <div className={`${styles.right} applyBoxShadow`}></div>
    </section>
    );
};

export default Contact;