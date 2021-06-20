import { useRouter } from 'next/router';
import styles from 'styles/404/404.module.scss';

export default function notFound({ theme }) {
  const router = useRouter();

  const goHome = () => {
    router.push('/');
  }

  return (
    <div className={theme ? `${styles.error} ${styles.dark}` : styles.error}>
      <h1>404</h1>
      <h2>Not Found</h2>
      <button onClick={goHome}>Go Home</button>
      <h3>For the code is dark and full of errors.</h3>
    </div>
  )
}