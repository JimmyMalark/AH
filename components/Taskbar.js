import { useEffect, useState } from "react";
import styles from 'styles/Taskbar.module.scss';

export default function Taskbar({ jmOpen, setJmOpen, startOpen, setStartOpen, jmMin, setTasks, theme }) {
  const t = new Date;
  const [time, setTime] = useState();

  const jmWin = () => {
    setStartOpen(false);
    setJmOpen(!jmOpen);
  }

  const jmTasks = (e) => {
    e.preventDefault();
    setTasks(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval)
  }, [time]);

  return (
    <footer className={theme ? `${styles.footer} ${styles.dark}` : styles.footer}>

      <div className={styles.leftIcons}>

        {/* svg for start icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="125, 100, 150,110"
          className={startOpen ?
            `${styles.startIcon} ${styles.open}` : styles.startIcon}
          onClick={() => setStartOpen(!startOpen)}><path id="path1" d="M172.993 100.714 C 166.487 101.723,166.072 102.052,148.990 119.718 C 140.810 128.179,134.459 134.713,130.248 139.002 L 126.205 143.121 127.093 144.059 C 133.418 150.738,144.910 151.905,152.731 146.662 C 153.478 146.162,159.061 140.809,165.138 134.767 L 176.187 123.781 177.291 125.026 C 177.898 125.710,186.154 134.732,195.639 145.074 C 214.082 165.184,214.242 165.376,215.180 168.342 C 218.166 177.784,210.644 187.847,200.600 187.847 C 187.477 187.847,180.545 172.814,189.064 162.830 C 189.880 161.874,190.548 161.026,190.548 160.946 C 190.548 160.678,176.377 145.236,176.131 145.236 C 175.131 145.236,169.507 152.360,167.631 156.001 C 155.124 180.281,173.031 209.395,200.503 209.446 C 232.592 209.506,249.388 171.724,227.680 148.315 C 226.484 147.026,224.347 144.692,222.930 143.128 C 221.512 141.564,218.133 137.854,215.421 134.884 C 212.708 131.913,205.818 124.347,200.109 118.069 C 188.555 105.365,187.366 104.196,184.556 102.781 C 181.106 101.043,176.353 100.194,172.993 100.714 M220.405 100.968 C 216.773 101.765,214.060 103.177,211.455 105.625 L 209.652 107.320 217.429 115.855 C 221.707 120.549,229.254 128.844,234.200 134.288 C 244.559 145.687,245.974 147.116,248.280 148.500 C 255.686 152.947,265.783 152.144,272.032 146.611 L 273.518 145.295 272.741 144.440 C 272.313 143.970,267.931 139.130,263.002 133.683 C 240.163 108.448,237.123 105.191,235.205 103.907 C 230.744 100.921,225.429 99.865,220.405 100.968 " stroke="none" fillRule="evenodd"></path></svg>

        {!jmMin &&
          <div title="Amir Hosein">
            <img
              src={theme ?
                "/jmIconWhite.svg" :
                "/jmIcon.svg"
              }
              className={styles.jmIcon}
              onClick={jmWin}
              onContextMenu={jmTasks} />
          </div>}
      </div>

      <p
        className={styles.date}
        onClick={() => setStartOpen(false)}
        title="Date & Time"
      >
        {time}<br />{t.toLocaleDateString()}
      </p>
    </footer>
  )
}