function About() {
  const interests = [
    { icon: 'ri-code-box-line', color: '#ffbb2c', title: 'Software Development' },
    { icon: 'ri-settings-2-fill', color: '#5578ff', title: 'Frontend Development' },
    { icon: 'ri-window-fill', color: '#e80368', title: 'Web Development' },
    { icon: 'ri-code-s-slash-fill', color: '#28a745', title: 'Software Engineering' },
    { icon: 'ri-database-2-line', color: '#f1081f', title: 'Database' },
    { icon: 'ri-file-list-3-line', color: '#47aeff', title: 'Algorithms' }
  ]

  return (
    <section id="about" className="about">
      {/* About Me */}
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/Portfolio/assets/img/profile.png" className="img-fluid" alt="Siddhant Shrestha" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <p>
              I am a web designer, developer, and data analyst specializing in modern web technologies and frameworks.
            </p>
            <p>
              My expertise includes working with HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, Bootstrap, WordPress, and PHP. Additionally, I have experience with frameworks like Django and Laravel, which allow me to create dynamic and robust web applications.
            </p>
            <p>
              I have created numerous projects utilizing the technologies mentioned above, all of which are showcased in this portfolio. These projects reflect my ability to design and develop high-quality web applications tailored to user needs.
            </p>
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="interests container">
        <div className="section-title">
          <h2>Interests</h2>
        </div>

        <div className="row">
          {interests.map((interest, index) => (
            <div key={index} className={`col-lg-3 col-md-4 ${index > 3 ? 'mt-4' : index > 1 ? 'mt-4 mt-md-0' : index === 1 ? 'mt-4 mt-md-0' : ''}`}>
              <div className="icon-box">
                <i className={interest.icon} style={{ color: interest.color }}></i>
                <h3>{interest.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
