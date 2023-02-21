import styles from './Contact.module.scss'
import React from 'react'

const Contact = ({ icon, title, subTitle }) => {
  return (
    <div className={styles.contact}>
      {icon}
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
    </div>
  )
}

export default Contact
