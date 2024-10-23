import React, {ReactNode} from 'react';
import styles from "./Alert.module.scss"

type IProps = {
  type: 'default' | 'success' | 'danger' | 'warning';
  title?: string;
  action?: 'text';
  extraClass?: 'full-width' | string;
  children: ReactNode;
};

const Alert = ({type, title, action, extraClass, children}: IProps) => {

  const classNames = `${styles.alert} ${styles[type] || ''} ${extraClass ? styles[extraClass] : ''}`;

  return (
    <div className={classNames}>
      <div className={styles.alert__icon}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.alert__svg} fill="none" viewBox="0 0 24 24"
             aria-hidden="true">
          <path fill="#271FE0"
                d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 4.92a1.56 1.56 0 1 1 0 3.12 1.56 1.56 0 0 1 0-3.12Zm3.84 13.06a.5.5 0 0 1-.5.5h-6.2a.5.5 0 0 1-.5-.5v-.92a.5.5 0 0 1 .5-.5h2.14v-5.28H9.86a.5.5 0 0 1-.5-.5v-.92a.5.5 0 0 1 .5-.5h2.84a.5.5 0 0 1 .5.5v6.7h2.14a.5.5 0 0 1 .5.5v.92Z"></path>
        </svg>
      </div>
      <div className={styles.alert__message} role="status">
        {title &&
            <p className={styles.alert__title}>
              {title}
            </p>}
        <p>{children}</p>
        {action &&
            <div className={styles.alert__action}>
              {action}
            </div>
        }
      </div>
      <div className={styles.alert__close}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="none" viewBox="0 0 24 24"
             aria-hidden="true">
          <path fill="#212134"
                d="M24 2.417 21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Alert;