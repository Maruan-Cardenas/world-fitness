import styles from './Layout.module.scss'
import Head from 'next/head'
import Header from '../Header'

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={styles.layout}>
        {children}
      </main>
    </>
  )
}

export default Layout
