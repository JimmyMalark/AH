import { SiVisualstudiocode, SiJavascript, SiNextDotJs, SiTailwindcss, SiTypescript, SiVueDotJs, SiVuetify, SiInstagram, SiNuxtDotJs, SiAngular, SiMongodb, SiElectron} from 'react-icons/si';
import { DiGit, DiGithubBadge, DiNodejsSmall, DiReact, DiCss3, DiSass, DiAptana, DiDotnet } from 'react-icons/di';
import { VscRegex } from 'react-icons/vsc';
import { IoLogoPwa } from 'react-icons/io5';
import styles from 'styles/home/Home.module.scss';

export default function Home({ theme }) {
  return (
    <div
      className={
        theme ?
          `${styles.home} ${styles.dark}` :
          styles.home
      }
    >

      {/* <img
        src="/rdr2.png"
        draggable="false"
      /> */}
      <div className={styles.portPic}>

      </div>

      <div
        className={styles.contact}
      >
        <a
          href="https://github.com/JimmyMalark" target="_blank"
          className={styles.contactGithub}
        >
          <DiGithubBadge />
        </a>
        <a
          href="https://www.instagram.com/jamesmalarkey20021712/"
          target="_blank"
        >
          <SiInstagram />
        </a>
      </div>

      {/* Personal details */}
      <div className={styles.card}>
        <ul>
          <li className="
            flex
            justify-between
            mx-auto
            lg:w-1/2
          ">
            <p>Name:</p>
            <p>Amir Hosein</p>
          </li>
          <li className="
            flex
            justify-between
            mx-auto
            lg:w-1/2
          ">
            <p>Birthdate:</p>
            <p>12/17/2002</p>
          </li>
          <li className="
            flex
            justify-between
            mx-auto
            lg:w-1/2
          ">
            <p>Age:</p>
            <p>18</p>
          </li>
          <li className="
            flex
            justify-between
            mx-auto
            lg:w-1/2
          ">
            <p>Languages:</p>
            <p>English, Farsi</p>
          </li>
        </ul>
      </div>

      <h2
        className={styles.skills}
      >Skills</h2>
      {/* Basics */}
      <div className={styles.skillCard}>
        <h3>Basics</h3>
        <ul>
          <li>
            <SiVisualstudiocode
              className={styles.siIcon}
            />
            <p>VS Code</p>
          </li>
          <li>
            <DiGit />
            <p>Git</p>
          </li>
          <li>
            <DiGithubBadge />
            <p>GitHub</p>
          </li>
          <li>
            <DiNodejsSmall />
            <p>NodeJS</p>
          </li>
        </ul>
      </div>

      {/* Frontend */}
      <div className={styles.skillCard}>
        <h3>Frontend</h3>
        <ul>
          <li>
            <SiJavascript />
            <p>Javascript</p>
          </li>
          <li>
            <SiTypescript />
            <p>Typescript</p>
          </li>
          <li>
            <DiReact />
            <p>React</p>
          </li>
          <li>
            <SiNextDotJs />
            <p>NextJS</p>
          </li>
          <li>
            <DiCss3 />
            <p>CSS</p>
          </li>
          <li>
            <DiSass />
            <p>Sass</p>
          </li>
          <li>
            <SiTailwindcss />
            <p>TailwindCSS</p>
          </li>
          <li>
            <SiVueDotJs />
            <p>Vue.js</p>
          </li>
          <li>
            <SiVuetify />
            <p>Vuetify</p>
          </li>
          <li>
            <SiNuxtDotJs />
            <p>NuxtJs</p>
          </li>
        </ul>
      </div>

      {/* Backend */}
      <div className={styles.skillCard}>
        <h3>Backend</h3>
        <ul>
          <li>
            <DiNodejsSmall />
            <p>NodeJS</p>
          </li>
          <li>
            <SiMongodb />
            <p>MongoDB</p>
          </li>
          <li>
            <DiAptana />
            <p>RestAPI</p>
          </li>
        </ul>
      </div>

      {/* Learning in progress */}
      <div className={styles.skillCard}>
        <h3>Learning in progress</h3>
        <ul>
          <li>
            <IoLogoPwa />
            <p>PWA</p>
          </li>
          <li>
            <VscRegex />
            <p>RegEx</p>
          </li>
          <li>
            <SiAngular />
            <p>Angular</p>
          </li>
          <li>
            <SiElectron />
            <p>Electron</p>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div style={{marginBottom: "2rem"}}>
          <h3>Call Me:</h3>
          <h3><a href="tel:09304583701">09304583701</a></h3>
        </div>
        <div>
          <h3>Email Me:</h3>
          <h3><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZWPbzkpwthvsgBNMFzGkZMjdrcbJVHZPzKCjdvHgmLClMTpkjnScRtpgSJlnfjDzhCZVq" target="_blank">ahmousavigh01@gmail.com</a></h3>
        </div>
      </footer>
    </div>
  )
}
