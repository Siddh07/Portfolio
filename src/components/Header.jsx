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
                'Full-Stack Developer',
                'Creative Web Designer',
                'Data Solutions Architect',
                'Image & Data Analyst'
              ]}
              typeSpeed={65}
              backSpeed={65}
              loop
              className="typing"
              style={{ color: '#ffbf00' }}
            />
          </h2>
          
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li>
                <Link to="header" activeClass="active" spy={true} smooth={true} duration={500} onClick={() => setHeaderTop(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="education" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link to="experience" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <a href="/Resume_Siddhant-Shrestha.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <Link to="links" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={() => setHeaderTop(true)}>
                  <span>Connect</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileNavActive && (
        <>
          <nav className="mobile-nav d-lg-none">
            <ul>
              <li>
                <Link to="header" activeClass="active" spy={true} smooth={true} duration={500} onClick={closeMobileNav}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="education" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Education</span>
                </Link>
              </li>
              <li>
                <Link to="experience" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Experience</span>
                </Link>
              </li>
              <li>
                <Link to="portfolio" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Skills</span>
                </Link>
              </li>
              <li>
                <a href="/Resume_Siddhant-Shrestha.pdf" target="_blank" rel="noopener noreferrer">
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <Link to="links" activeClass="active" spy={true} smooth={true} duration={500} offset={-50} onClick={closeMobileNav}>
                  <span>Connect</span>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mobile-nav-overlay" onClick={closeMobileNav}></div>
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
