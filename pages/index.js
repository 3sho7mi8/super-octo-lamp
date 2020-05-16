import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Alert from '../components/alert'
import utilsStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type='error'>失敗</Alert>
      <section className={utilsStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you_ll be building a site like this on {' '}
          <a href="https://nextjs.org">our Next.js</a>.)
        </p>
      </section>
    </Layout>
  )
}
