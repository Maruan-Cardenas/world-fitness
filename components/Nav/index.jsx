import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './Nav.module.scss'

const Nav = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className={styles.nav}>
      <ul data-isOpen={isOpen}>
        <li data-active={router.asPath === '/'}>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <div data-isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} className={styles.menuActivador}>
        <span className={styles.menuActivadorLinea1} />
        <span className={styles.menuActivadorLinea2} />
        <span className={styles.menuActivadorLinea3} />
      </div>
    </nav>
  )
}

export default Nav
