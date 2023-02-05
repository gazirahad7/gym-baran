import '@/styles/globals.css';
import { Sporting_Grotesque } from '@next/font/google';

//  const inter = Sporting_Grotesque({ 
//   weight: ['100', '300', '400', '500', '700', '900'],
//   subsets: ['latin'] }
//   )
export default function App({ Component, pageProps }) {
  return(
  <>
   {/* <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style> */}
  <Component {...pageProps} />
  </>
  )
}
