// Styles
import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBox1}>
        Enlaces disponibles
        <div>
          <span> <Link href='/#inicio'>Inicio</Link> </span>
          <span> <Link href='/productos'>Productos Fitness</Link> </span>
          <span> <Link href='/#opiniones'>Opiniones</Link> </span>
          <span> <Link href='/#contacto'>Contacto</Link> </span>
        </div>
      </div>
      <div className={styles.footerBox2}>
        <div className={styles.politics}>
          Políticas
          <div>
            <span><Link href='/politics/privacy'>Privacidad</Link></span>
            <span><Link href='/politics/conditions'>Condiciones</Link></span>
            <span><Link href='/politics/cookies'>Cookies</Link></span>
          </div>
        </div>
        <div className={styles.copy}>Copy rigth &copy; World Fitness</div>
        <div className={styles.author}>
          Website of
          <span>
            <Link href='https://maruan.es'>Maruan Vicente</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
