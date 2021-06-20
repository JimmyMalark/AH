import styles from 'styles/layout/Layout.module.scss';
import { useState, useEffect } from 'react';
import Taskbar from '../Taskbar';
import Start from '../Start';
import Tasks from '../Tasks';
import Wingui from '../Wingui/Wingui';

export default function Layout({
  children,
  theme,
  setTheme
}) {
  const [jmOpen, setJmOpen] = useState(true);
  const [startOpen, setStartOpen] = useState(false);
  const [jmMin, setJmMin] = useState(false);
  const [tasks, setTasks] = useState(false);
  const [jmMax, setJmMax] = useState(true);

  const jmIco = () => {
    setStartOpen(false);
    setJmOpen(true);
    setJmMin(false);
  }

  useEffect(() => {
    if (localStorage.getItem('dark')) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  })

  return (
    <div
      className={theme ?
        `${styles.layout} ${styles.dark}` :
        styles.layout}
      onClick={() => setTasks(false)}
    >

      {/* Wallpaper */}
      <img
        src="icon.svg"
        className={styles.wallpaper}
        onClick={() => setStartOpen(false)}
      />

      {/* JM icon on wallpaper */}
      <div
        className={styles.jmFileIco}
        title="Amir Hosein"
        onClick={jmIco}>
        <img
          src="/jmIcon.svg"
          draggable="false"
          className={styles.jmFileImg}
        />
        <p
          className="
          text-xs
          text-gray-50
        ">
          Amir<br />Hosein
        </p>
      </div>

      {/* JM Window */}
      {jmOpen &&
        <Wingui
          children={children}
          setStartOpen={setStartOpen}
          theme={theme}
          setOpen={setJmOpen}
          setMin={setJmMin}
          Max={jmMax}
          setMax={setJmMax}
          icon={theme ?
            "/jmIconWhite.svg" :
            "/jmIcon.svg"
          }
          size={
            jmMax ?
              {
                width: "100%",
                height: "calc(100vh - 2rem)"
              }
              :
              {
                width: "60%",
                height: "50%"
              }
          }
        />
      }

      {/* Start */}
      {startOpen &&
        <Start
          jmIco={jmIco}
          theme={theme}
          setTheme={setTheme}
        />
      }

      {/* Tasks */}
      {tasks &&
        <Tasks
          setJmMin={setJmMin}
          setJmOpen={setJmOpen}
          theme={theme}
        />
      }

      {/* Taskbar */}
      <Taskbar
        jmOpen={jmOpen}
        startOpen={startOpen}
        setStartOpen={setStartOpen}
        setJmOpen={setJmOpen}
        setTasks={setTasks}
        theme={theme}
        setJmMin={setJmMin}
        jmMin={jmMin}
      />
    </div>
  )
}