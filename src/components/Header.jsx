import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { ReactTyped } from 'react-typed'

function Header() {
  const [mobileNavActive, setMobileNavActive] = useState(false)
  const [headerTop, setHeaderTop] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive)
  }

  const closeMobileNav = () => {
    setMobileNavActive(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      const container = document.querySelector('.mobile-nav, .mobile-nav-toggle')
      if (container && !container.contains(e.target) && mobileNavActive) {
        closeMobileNav()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [mobileNavActive])

  return (
    <>
      <header id="header" className={headerTop ? 'header-tops header-top' : 'header-tops'}>
        <div className="container">
          <h3><a href="#header">Siddhant Shrestha</a></h3>
          <h2 style={{ color: '#fff' }}>
            I'm a{' '}
            <ReactTyped
              strings={[
                'Web Developer',
                'Web Designer',
                'Coder',
                'Image and Data Analyst'
              ]}
              typeSpeed={65}
              backSpeed={65}
              loop
              className="typing"
              style={{ color: '#12d640' }}
            />
          </h2>
          
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <Link to="header" smooth={true} duration={500} onClick={() => setHeaderTop(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <a href="/Portfolio/Resume_Siddhant-Shrestha.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <Link to="links" smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Links</span>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/siddhant-shrestha-341853198/" target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://www.github.com/Siddh07" target="_blank" rel="noopener noreferrer" className="github">
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileNavActive && (
        <>
          <nav className="mobile-nav d-lg-none">
            <ul>
              <li className="active">
                <Link to="header" smooth={true} duration={500} onClick={closeMobileNav}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link to="experience" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <a href="/Portfolio/Resume_Siddhant-Shrestha.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <Link to="links" smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Links</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-nav-overly" onClick={closeMobileNav}></div>
        </>
      )}

      <button 
        type="button" 
        className="mobile-nav-toggle d-lg-none"
        onClick={toggleMobileNav}
      >
        <i className={mobileNavActive ? 'icofont-close' : 'icofont-navigation-menu'}></i>
      </button>
    </>
  )
}

export default Header
