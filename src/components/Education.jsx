import { motion } from 'framer-motion';

function Education() {
  const certifications = [
    {
      img: '/assets/img/certification/HackerRank.png',
      title: 'Frontend Developer (React)',
      link: 'https://www.hackerrank.com/certificates/6828d0daf2c2'
    },
    {
      img: '/assets/img/certification/udemy.png',
      title: 'CSS, Js and Bootstrap',
      link: 'https://www.udemy.com/certificate/UC-6db6cff0-98ca-4679-a248-cb9c4db22cc8/'
    },
    {
      img: '/assets/img/certification/udemy.png',
      title: 'React-Basic',
      link: 'https://www.udemy.com/certificate/UC-bf888c85-29fe-4a57-b39c-0c5b16d0a950/'
    },
    {
      img: '/assets/img/certification/udemy.png',
      title: 'React Course',
      link: 'https://www.udemy.com/certificate/UC-a2cf7e03-ae26-4640-885f-5b922fbcb7af/'
    },
    {
      img: '/assets/img/certification/corsera.png',
      title: 'Adobe Illustrator',
      link: 'https://www.coursera.org/account/accomplishments/verify/8YGAWBHWBFYY'
    },
    {
      img: '/assets/img/certification/corsera.png',
      title: 'Basic Image Classification',
      link: 'https://www.coursera.org/account/accomplishments/verify/5LSK7BJHACBV'
    },
    {
      img: '/assets/img/certification/corsera.png',
      title: 'AWS S3 Basics',
      link: 'https://coursera.org/share/a49f7570c0cebf51c4bcc09f3e75f48e'
    },
    {
      img: '/assets/img/certification/corsera.png',
      title: 'Figma',
      link: 'https://www.coursera.org/account/accomplishments/verify/6VGSFJ3ZYPDJ'
    },
    {
      img: '/assets/img/certification/corsera.png',
      title: 'Data Analysis',
      link: 'https://www.coursera.org/account/accomplishments/verify/VBDSHNDFQT2T'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        
        <div className="academic-education-wrapper">
          {/* Herald College */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="academic-card"
          >
            <div className="academic-content">
              <div className="academic-logo-section">
                <div className="academic-logo-wrapper">
                  <img src="/assets/img/education/Herald-College.png" alt="Herald College" />
                </div>
              </div>
              
              <div className="academic-info">
                <h3 className="academic-degree">Bachelors in Information Technology</h3>
                <p className="academic-institution">Herald College Kathmandu (University of Wolverhampton)</p>
                
                <div className="coursework-section">
                  <h6 className="text-white mb-3 font-weight-bold">Focused Coursework:</h6>
                  <div className="coursework-grid">
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Algorithms and Data Structure</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Modular Programming</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Database Systems (SQL)</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Web & Backend Development</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> System Architecture & Modeling</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Niketan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="academic-card"
          >
            <div className="academic-content">
              <div className="academic-logo-section">
                <div className="academic-logo-wrapper">
                  <img src="/assets/img/education/VS-Niketan.png" alt="VS Niketan" />
                </div>
              </div>
              
              <div className="academic-info">
                <h3 className="academic-degree">+2 Major in Computer Science</h3>
                <p className="academic-institution">VS Niketan Secondary School</p>
                
                <div className="coursework-section">
                  <h6 className="text-white mb-3 font-weight-bold">Focused Coursework:</h6>
                  <div className="coursework-grid">
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> C++ language</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> HTML, CSS and JS</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> C Programming</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Q Basics</div>
                    <div className="coursework-item"><i className="ri-checkbox-circle-line"></i> Computer Principle</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Online Certifications */}
      <div className="container mt-5 pt-lg-5">
        <div className="cert-section-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 800 }}
          >
            Online Certifications
          </motion.h2>
        </div>

        <motion.div 
          className="cert-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="cert-card"
            >
              <div className="cert-img-container">
                <img src={cert.img} alt={cert.title} />
              </div>
              <h4 className="cert-title">{cert.title}</h4>
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-link-btn"
              >
                Verify Credentials <i className="ri-external-link-line"></i>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
