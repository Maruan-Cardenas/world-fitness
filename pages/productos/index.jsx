// Styles
import styles from './Products.module.scss'

// Components
import Layout from '../../components/Layout'
import Title from '../../components/Title'

const Products = () => {
  return (
    <Layout
      title='Productos Fitness'
      description='Transforma tu cuerpo y mejora tu salud con nuestros productos fitness de alta calidad. Encuentra tu equipo perfecto para entrenar en casa o en el gimnasio. ¡Compra ahora y alcanza tus metas!'
    >
      <section className={styles.products}>
        <Title>Productos Fitness para un Estilo de Vida Saludable</Title>
        <p>
          Transforma tu cuerpo y mejora tu salud con nuestros productos fitness de alta calidad. Encuentra tu equipo perfecto para entrenar en casa o en el gimnasio. ¡Compra ahora y alcanza tus metas!
        </p>
      </section>
    </Layout>
  )
}

export default Products
