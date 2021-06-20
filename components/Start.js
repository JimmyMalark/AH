import { useState } from 'react';
import {
  MdViewList,
  MdApps,
  MdBrightnessMedium
} from 'react-icons/md';
import styles from 'styles/Start.module.scss';

export default function Start({
  jmIco,
  theme,
  setTheme
}) {
  const [active, setActive] = useState(true);

  const themeChange = () => {
    if (theme) {
      localStorage.removeItem('dark');
      setTheme(false);
    } else {
      localStorage.setItem('dark', 'true');
      setTheme(true);
    }
  }

  return (
    <nav
      className={theme ?
        `${styles.nav} 
    ${styles.dark}` :
        styles.nav}
    >
      <nav
        className={styles.startNav}
      >
        <div
          className={styles.icons}
        >
          <MdApps
            className={active ?
              `${styles.leftIcons} 
            ${styles.active}` :
              styles.leftIcons}
            onClick={() => setActive(true)}
          />
          <MdViewList
            className={!active ?
              `${styles.leftIcons} 
            ${styles.active}` :
              styles.leftIcons}
            onClick={() => setActive(false)}
          />
        </div>
        <MdBrightnessMedium
          onClick={themeChange}
          className={styles.themeIcon}
        />
      </nav>
      {active &&
        <div
          className={styles.apps}
        >
          <div
            title="Amir Hosein"
            onClick={jmIco}
          >
            <img
              src="/jmIcon.svg"
              draggable="false"
            />
            <p>
              Amir<br />Hosein
            </p>
          </div>
        </div>}

      {!active &&
        <div
          className={styles.viewList}
        >
          <small>
            A
          </small>
          <div
            title="James Malarkey"
            onClick={jmIco}
          >
            <img
              src="/jmIcon.svg"
              draggable="false"
            />
            <p>
              Amir Hosein
            </p>
          </div>
        </div>}
    </nav>
  )
}
