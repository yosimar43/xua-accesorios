import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
 static async getInitialProps(ctx: any) {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
 }

 render() {
  return (
   <Html lang="es">
    <Head>
     <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
      integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
     />
     <link rel="preconnect" href="https://fonts.googleapis.com" />
     <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
     />
     <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap"
      rel="stylesheet"
     />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
