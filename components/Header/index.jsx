// Styles
import styles from './Header.module.scss'

// Next Components
import Link from 'next/link'
import Image from 'next/image'

// Images
import logo from '../../public/images/logo.png'
import Nav from '../Nav'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src={logo} alt='Logo' />
          </Link>
        </div>
        <div className={styles.nav}>
          <Nav />
        </div>
      </header>
      <div id='inicio' className={styles.box} />
    </>
  )
}

export default Header
