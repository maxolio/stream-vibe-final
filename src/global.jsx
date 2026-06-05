import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Content from '@/layouts/Content'



export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Friendly Frontend Starter | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href="/src/assets/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/src/assets/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/src/assets/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/src/assets/favicons/site.webmanifest" />
      </Head>
      <Header/>
      <Content>
        {children}
      </Content>
      <Footer/>
    </>
  )
}
