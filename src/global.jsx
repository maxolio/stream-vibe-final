import '@/styles'
import {Head} from 'minista'
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'
import Content from '@/layouts/Content'

export default (props) => {
  const {children, title, url} = props

  return (
    <>
      <Head htmlAttributes={{lang: 'en'}}>
        <title>Friendly Frontend Starter | {title}</title>
        <script src="/src/main.js"
                type="module" />
        <link rel="apple-touch-icon"
              sizes="180x180"
              href="/src/assets/favicons/apple-touch-icon.png" />
        <link rel="icon"
              type="image/png"
              sizes="32x32"
              href="/src/assets/favicons/favicon-32x32.png" />
        <link rel="icon"
              type="image/png"
              sizes="16x16"
              href="/src/assets/favicons/favicon-16x16.png" />
        <link rel="manifest"
              href="/src/assets/favicons/site.webmanifest" />
      </Head>
      <Header url={url}/>
      <Content>
        {children}
        <p>    odit perferendis perspiciatis, rerum tenetur voluptas. Ab aliquam aliquid amet, animi architecto aspernatur assumenda aut autem cumque dolores ducimus earum error et eveniet, exercitationem expedita facilis itaque molestias mollitia natus nisi nostrum odit perferendis quae quam, quidem quod reprehenderit repudiandae rerum tempora veritatis vitae voluptates voluptatum. Deserunt facilis nam neque quia quos saepe? A accusamus amet autem blanditiis deserunt dolorum eius est ex ipsam itaque labore laboriosam laborum molestias mollitia necessitatibus nemo nihil non, nostrum odio possimus praesentium quam quasi quod rerum sit velit veritatis voluptas! Ad aut consequatur deleniti ducimus et eveniet, harum id nam neque nesciunt non obcaecati provident quisquam reprehenderit rerum, sed, ullam vero.
        </p>
      </Content>
      <Footer />
    </>
  )
}
