import React from 'react'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404 Not Found</h1>
      <p className={styles.p}>The requested page could not be found.</p>
      <p className={styles.p}>
        <a className={styles.button} href='/'>Go back to the home page</a>
      </p>
    </div>
  )
}

export default NotFoundPage
