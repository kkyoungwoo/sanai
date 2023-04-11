import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '../theme.config'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.dateLocale} className="relative scroll-smooth antialiased">
        <Head>
          <meta name="theme-color" content="#27272a" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="alternate" type="application/rss+xml" href="/feed/blog/feed.xml" />
          <meta name="naver-site-verification" content="e2b21a6c626113df85c859d7ecb8bf850bde058d" />
          <meta name="naver-site-verification" content="73f4a4672fd2354e580e24a37d9a46bec1a0bf61" />
          <meta property="og:image" content="/opimage.png" />
        </Head>
        <body className="scrollbar-thin scrollbar-thumb-omega-500 hover:scrollbar-thumb-omega-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
