import { useRouter } from 'next/router'
import { Phone, WhatsApp } from '../components/Icons'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.scss'

export default function Home () {
  const router = useRouter()
  return (
    <Layout
      title='World Fitness'
      description='Encuentra todo lo que necesitas para maximizar tus entrenamientos y alcanzar tus objetivos de fitness en nuestra tienda en línea. Desde proteínas y termogénicos hasta equipos de entrenamiento y accesorios de fitness, tenemos todo lo que necesitas para lograr el éxito. Envíos rápidos y precios asequibles. ¡Descubre nuestra colección ahora!'
    >
      <div className={styles.homeBox}>
        <section className={styles.head}>
          <span>World Fitness</span>
          <h1>Los mejores productos Fitness</h1>
          <div className={styles.buttonsContact}>
            <button className={styles.contact} onClick={() => router.push('tel:+34611504276')}>
              <Phone />
              <span className={styles.title}>Llámanos</span>
            </button>
            <button className={styles.contact} onClick={() => router.push('https://wa.me/+34611504276')}>
              <WhatsApp />
              <span className={styles.title}>WhatsApp</span>
            </button>
          </div>
        </section>
        <section className={styles.ourProducts}>
          <h2 className={styles.title}>Los mejores productos fitness para la mejora personal</h2>
          <div className={styles.paragraphs}>
            <p>¿Estás listo para transformar tu cuerpo y tu vida? En nuestro sitio web, encontrarás una amplia selección de productos fitness de alta calidad que te ayudarán a alcanzar tus objetivos de forma rápida y efectiva.</p>
            <p>Tenemos una amplia variedad de productos diseñados para ayudarte a alcanzar tus objetivos de fitness y estilo de vida saludable. Desde proteínas y termogénicos hasta barritas energéticas y suplementos vitamínicos, tenemos todo lo que necesitas para maximizar tu rendimiento y lograr tus objetivos de forma efectiva.</p>
            <p>Pero eso no es todo. Nuestro equipo de expertos en fitness está aquí para brindarte consejos útiles y personalizados sobre cómo maximizar los beneficios de cada producto. Ya sea que estés buscando perder peso, aumentar la masa muscular o simplemente mantenerte en forma, nuestro equipo de expertos puede ayudarte a alcanzar tus objetivos.</p>
          </div>
          <div className={styles.image} />
        </section>
      </div>
    </Layout>
  )
}
