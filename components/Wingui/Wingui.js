import { useState } from 'react';
import styles from 'styles/Wingui/Wingui.module.scss';

export default function Wingui({
  children,
  setStartOpen,
  theme,
  setOpen,
  setMin,
  setMax,
  Max,
  icon,
  size
}) {
  const [menuIcon, setMenuIcon] = useState(false);

  const close = () => {
    setOpen(false);
    setMin(true);
  }
  const Maximize = () => {
    setMax(!Max);
  }
  const Minimize = () => {
    setOpen(false);
  }

  return (
    <div
      className={theme ?
        `${styles.wingui} ${styles.dark}` :
        styles.wingui
      }
      onClick={() => setStartOpen(false)}
      style={size}
    >

      {/* Window Navbar */}
      <nav
        className={styles.navbar}
      >
        <div onClick={() => setMenuIcon(false)}>
          <span
            className={styles.close}
            title="Close"
            onClick={close}
          />
          <span
            className={styles.maximize}
            onClick={Maximize}
            title={Max ? "Restore Down" : "Maximize"}
          />
          <span
            className={styles.minimize} title="Minimize"
            onClick={Minimize}
          />
        </div>

        <img
          src={icon} alt="JM"
          onClick={() => setMenuIcon(!menuIcon)}
          draggable="false"
        />
      </nav>

      {menuIcon &&
        <div className={styles.iconMenu}
          onClick={() => setMenuIcon(false)}>

          <div className={styles.container}>

            <div
              onClick={close}
            >
              <span
                className={styles.close}
                title="Close"
              />
              <p>Close</p>
            </div>

            <div
              onClick={Maximize}
            >
              <span
                className={styles.maximize}
              />
              <p>{Max ? "Restore Down" : "Maximize"}</p>
            </div>

            <div
              onClick={Minimize}
            >
              <span
                className={styles.minimize} title="Minimize"
              />
              <p>Minimize</p>
            </div>
          </div>

        </div>
      }

      {/* Children */}
      <div onClick={() => setMenuIcon(false)}>
        {children}
      </div>
    </div>
  );
}
