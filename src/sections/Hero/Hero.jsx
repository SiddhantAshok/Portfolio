import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedInIcon from '../../assets/linkedin-light.svg';
import gmailIcon from '../../assets/gmail-light.svg';

function Hero() {
  return <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="Profile picture of Siddhant Ashok" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
    </div>
    <div className={styles.info}>
        <h1>
            Siddhant
            <br />
            Ashok
        </h1>
        <h2>
            Full Stack Developer
        </h2>
        <span>
            <a href="https://github.com/SiddhantAshok">
            <img src={githubIcon} alt="Github-icon" /></a>
        </span>
        <span>
            <a href="https://github.com/SiddhantAshok">
            <img src={linkedInIcon} alt="Linkedin-icon" /></a>
        </span>
        <span>
            <a href="https://github.com/SiddhantAshok">
            <img src={gmailIcon} alt="Gmail-icon" /></a>
        </span>
    </div>
  </section>;
}

export default Hero