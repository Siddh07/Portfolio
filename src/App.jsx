import { useEffect, Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header'
import Loading from './components/Loading'
import './App.css'

// Lazy load components
const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Skills = lazy(() => import('./components/Skills'))
const Links = lazy(() => import('./components/Links'))

function App() {
  useEffect(() => {
    // Google Tag Manager
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-MW3BVQ2');

    // Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-TCYLCCZLPT');
  }, []);








  return (
    <>
      <Helmet>
        <title>Siddhant Shrestha - Personal Portfolio</title>
        <meta name="description" content="Here you can get all links to my social networks and personal information." />
        <meta name="keywords" content="Siddhant Shrestha, Portfolio, Web Developer, React, JavaScript" />
        
        {/* Open Graph */}
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:url" content="https://siddhant-shrestha.com.np/" />
        <meta property="og:title" content="Siddhant Shrestha | Personal Portfolio" />
        <meta property="og:site_name" content="Siddhant Shrestha | Personal Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Here you can get all links to my social networks and personal information." />
        <meta property="og:image" content="https://github.com/Siddh07.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="NB2AxCBdxkHWO3A4SCAQHOphpddd7DgOlJjuiVwGu6k" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TCYLCCZLPT"></script>
      </Helmet>

      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-MW3BVQ2"
          height="0" 
          width="0" 
          style={{display: 'none', visibility: 'hidden'}}
        ></iframe>
      </noscript>

      <Header />
      
      <main>
        <Suspense fallback={<Loading />}>
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Links />
        </Suspense>
      </main>
    </>
  )
}

export default App
