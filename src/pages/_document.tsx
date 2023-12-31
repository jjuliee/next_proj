/* eslint-disable react/no-danger */
import Document, { Head, Main, NextScript, Html } from 'next/document';
import React from 'react';
//import favicon from 'assets/images/Common/favicon.png';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>
          {/* Google Tag Manager */}
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
            }}
          /> */}
          {/* End Google Tag Manager */}

          <meta name="verify-admitad" content="0f8c5233c6" />
          <link rel="icon" type="image/x-icon" href={'' /*favicon*/} />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          {/* <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          /> */}
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
