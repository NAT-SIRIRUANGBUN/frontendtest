import styles from './footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.leftFooter}>
        <h2 className={styles.leftFooterHead}>Contact Admin</h2>
      </div>
      <div className={styles.rightFooter}>
        <div className={styles.rightTextBox}>
          <div className={styles.contactItem}>
            <span className={styles.icon}>&#9993;</span>
            xxxxx@gmail.com
          </div>
          <div className={styles.contactItem}>
            <span className={styles.icon}>&#9742;</span>
            <span>099-999-9999</span>
          </div>
        </div>
      </div>
    </div>
  )
}