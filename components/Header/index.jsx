import styles from './Header.module.scss'
import Nav from '../Nav'
import { Email, Maps, Phone, WhatsApp } from '../Icons'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import Contact from '../Contact'

const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Image src={logo} alt='Toldos Malaka' />
      </span>
      <Contact
        icon={<WhatsApp />}
        title='WhatsApp'
        subTitle='618 050 806'
      />
      <Contact
        icon={<Phone />}
        title='Llámanos'
        subTitle='618 050 806'
      />
      <Contact
        icon={<Email />}
        title='Email'
        subTitle='worldfitnes@gmail.com'
      />
      <Contact
        icon={<Maps />}
        title='Localízanos'
        subTitle='C/ Maestro Francisco Vila, Nº33'
      />
      <Nav />
    </header>
  )
}

export default Header
