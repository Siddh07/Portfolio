function Links() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Siddh07',
      logo: '/Portfolio/assets/img/links/github.svg'
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/siddhant-shrestha-341853198/',
      logo: '/Portfolio/assets/img/links/linkedin.svg'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shresthasiddhant',
      logo: '/Portfolio/assets/img/links/instagram.svg'
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com/@Me9alon',
      logo: '/Portfolio/assets/img/links/youtube.svg'
    }
  ]

  return (
    <section id="links" className="services">
      <div id="container">
        <a className="profile_link" href="https://github.com/Siddh07.png" target="_blank" rel="noopener noreferrer">
          <img className="profile" src="https://github.com/Siddh07.png" alt="Profile" />
        </a>

        <div className="links-container">
          <strong className="description">Getting in touch! 👋</strong>

          {socialLinks.map((link, index) => (
            <a key={index} className="link" href={link.url} target="_blank" rel="noopener noreferrer">
              <img className="logo" src={link.logo} alt={`${link.name} Logo`} />
              {link.name}
            </a>
          ))}
        </div>

        <div id="container" style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f4f4f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '50px auto 0' }}>
          <h1 style={{ fontFamily: "'Arial', sans-serif", fontSize: '36px', color: '#333', marginBottom: '20px', textDecoration: 'underline', cursor: 'auto' }}>
            Siddhant Shrestha
          </h1>
          <p style={{ fontFamily: "'Arial', sans-serif", fontSize: '18px', color: '#666', lineHeight: '1.6', marginTop: '0' }}>
            Let's connect and create a beautiful project.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Links
