import '@/styles'
import { Head } from 'minista'


export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Friendly Frontend Starter | {title}</title>
        <script src="/src/main.js" type="module" />

      </Head>
      <h1>Hello</h1>
    </>
  )
}
