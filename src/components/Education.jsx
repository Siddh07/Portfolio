function Education() {
  const certifications = [
    {
      img: '/Portfolio/assets/img/certification/udemy.png',
      title: 'CSS, Js and Bootstrap',
      link: 'https://www.udemy.com/certificate/UC-6db6cff0-98ca-4679-a248-cb9c4db22cc8/'
    },
    {
      img: '/Portfolio/assets/img/certification/udemy.png',
      title: 'React-Basic',
      link: 'https://www.udemy.com/certificate/UC-bf888c85-29fe-4a57-b39c-0c5b16d0a950/'
    },
    {
      img: '/Portfolio/assets/img/certification/udemy.png',
      title: 'React Course',
      link: 'https://www.udemy.com/certificate/UC-a2cf7e03-ae26-4640-885f-5b922fbcb7af/'
    },
    {
      img: '/Portfolio/assets/img/certification/corsera.png',
      title: 'Adobe Illustrator',
      link: 'https://www.coursera.org/account/accomplishments/verify/8YGAWBHWBFYY'
    },
    {
      img: '/Portfolio/assets/img/certification/corsera.png',
      title: 'Basic Image Classification',
      link: 'https://www.coursera.org/account/accomplishments/verify/5LSK7BJHACBV'
    },
    {
      img: '/Portfolio/assets/img/certification/corsera.png',
      title: 'AWS S3 Basics',
      link: 'https://coursera.org/share/a49f7570c0cebf51c4bcc09f3e75f48e'
    },
    {
      img: '/Portfolio/assets/img/certification/corsera.png',
      title: 'Figma',
      link: 'https://www.coursera.org/account/accomplishments/verify/6VGSFJ3ZYPDJ'
    },
    {
      img: '/Portfolio/assets/img/certification/corsera.png',
      title: 'Data Analysis',
      link: 'https://www.coursera.org/account/accomplishments/verify/VBDSHNDFQT2T'
    }
  ]

  return (
    <section id="education" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" style={{ display: 'inline-block' }}>
            {/* Herald College */}
            <div className="col-md-4 mt-4 mt-md-0 ml-0 icon-box p-2" data-aos="fade-up" data-aos-delay="100" style={{ padding: '0px 0px', paddingBottom: '5px', display: 'inline-block' }}>
              <a href="https://www.pucminas.br/" target="_blank" rel="noopener noreferrer">
                <img src="/Portfolio/assets/img/education/Herald-College.jpg" className="img-fluid" alt="Herald College" />
              </a>
              <p style={{ textAlign: 'left', color: '#fff', padding: '10px 35px' }}>
                <em>Bachelors in Information Technology</em>
              </p>
              <h6 style={{ textAlign: 'left', color: '#fff', padding: '0px 10px' }}>
                <b>Relevant Coursework</b>
              </h6>
              <ul style={{ textAlign: 'left', color: '#fff' }}>
                <li>Algorithms and Data Structure</li>
                <li>Modular Programming</li>
                <li>Database</li>
                <li>Web and backend development.</li>
                <li>Systems design, architecture and modeling</li>
              </ul>
            </div>

            {/* VS Niketan */}
            <div className="col-md-4 mt-4 mt-md-0 ml-0 icon-box p-2" data-aos="fade-up" data-aos-delay="100" style={{ padding: '0px 0px', paddingBottom: '5px', display: 'inline-block' }}>
              <a href="https://www.pucminas.br/" target="_blank" rel="noopener noreferrer">
                <img src="/Portfolio/assets/img/education/VS-Niketan.png" className="img-fluid" alt="VS Niketan" />
              </a>
              <p style={{ textAlign: 'left', color: '#fff', padding: '10px 35px' }}>
                <em>+2 - Major in Computer Science</em>
              </p>
              <h6 style={{ textAlign: 'left', color: '#fff', padding: '0px 10px' }}>
                <b>Relevant Coursework</b>
              </h6>
              <ul style={{ textAlign: 'left', color: '#fff' }}>
                <li>C++ language</li>
                <li>HTML, CSS and JS</li>
                <li>C Programming</li>
                <li>Q Basics</li>
                <li>Computer Principle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Online Certifications */}
      <div className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Online Certification</h2>
          </div>

          <div className="row portfolio-container">
            {certifications.map((cert, index) => (
              <div key={index} className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={cert.img} className="img-fluid" alt={cert.title} />
                  <div className="portfolio-info">
                    <h4>{cert.title}</h4>
                    <div className="portfolio-links">
                      <a href={cert.link} target="_blank" rel="noopener noreferrer" title="Certificate">
                        <i className="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
