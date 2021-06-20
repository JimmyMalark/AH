import { VscChromeClose } from 'react-icons/vsc';
import styles from 'styles/Tasks.module.scss';

export default function Tasks({ setJmOpen, setJmMin, theme }) {
  return (
    <div className={theme ? `${styles.tasks} ${styles.dark}` : styles.tasks}>
      <div className={styles.jmIcon} onClick={() => setJmOpen(true)}>
        <img src="/jmIcon.svg" draggable="false"
          className="w-6" />
        <p>Amir Hosein</p>
      </div>

      <div className={styles.closeIcon} onClick={() => {
        setJmOpen(false);
        setJmMin(true);
      }}>
        <span>
          <VscChromeClose />
        </span>
        <p>Close Window</p>
      </div>
    </div>
  )
}