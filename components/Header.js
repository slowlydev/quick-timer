import Head from "next/head";

export default function Header(props) {
  return (
    <Head>
      <meta charSet="UTF-8" key="charset" />
      <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />

      <title>QuickTimer</title>

      <meta name="description" content="Log your work times easily with QuickTimer"></meta>

      <meta name="apple-mobile-web-app-title" content="QuickTimer" key="apple-title" />

      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="QuickTimer" />
      <meta property="og:site_name" content="QuickTimer" />
      <meta property="og:description" content="Log your work times easily with QuickTimer" />
      <meta property="og:image" content="/favicon.png" />
      <meta property="og:url" content="https://quick-timer.vercel.app/" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content="QuickTimer" />
      <meta name="twitter:description" content="Log your work times easily with QuickTimer" />
      <meta name="twitter:image" content="/logo_nobg.png" />
      <meta name="twitter:site" content="@Slowlydev1" />
      <meta name="twitter:creator" content="@Slowlydev1" />

      <meta name="theme-color" content="#f5f5f7" key="theme-color" />
      <meta name="apple-mobile-web-app-capable" content="yes" key="apple-web-app-capable" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" key="apple-status-bar" />

      <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" key="shurtcut-icon" />
      <link rel="apple-touch-icon" href="/favicon.png" key="apple-touch-icon" />

      <link rel="canonical" href="https://quick-timer.vercel.app"></link>

      <link rel="manifest" href="/manifest.webmanifest" />
    </Head>
  )
}