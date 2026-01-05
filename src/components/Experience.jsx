import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      company: 'Cloud Factory',
      link: 'https://www.cloudfactory.com/',
      position: 'Image and Data Analyst',
      period: 'Nov 2023 - Present',
      skills: ['Python', 'SQL', 'Data Visualization', 'Pandas'],
      responsibilities: [
        'Utilizing advanced image processing and data analysis techniques to extract actionable insights from complex datasets.',
        'Collaborate with cross-functional teams to improve data workflows and enhance visualization strategies for informed decision-making.',
        'Develop and implement custom algorithms for image recognition, classification, and analysis, improving efficiency by 20%.'
      ]
    },
    {
      company: 'iCash Nepal',
      link: 'https://www.facebook.com/icash.np/',
      position: 'Laravel Developer Internship',
      period: 'May 2023 - Jun 2023',
      skills: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
      responsibilities: [
        'Assisted in developing and maintaining web applications using Laravel, enhancing functionality and performance.',
        'Collaborated with senior developers to troubleshoot and optimize backend systems for seamless user experiences.'
      ]
    },
    {
      company: 'We Inspire Nepal',
      link: 'https://weinspire.org.np/',
      position: 'Researcher',
      period: 'Jun 2019 - Aug 2019',
      skills: ['Research', 'Event Management', 'Public Relations'],
      responsibilities: [
        'Led the planning and execution of successful events, developing innovative concepts and strategies to engage audiences.',
        'Conducted research to identify trends and opportunities, using insights to craft impactful event ideas and enhance attendee experiences.',
        'Managed all aspects of event coordination, from conceptualization to on-site execution, ensuring smooth operations and high satisfaction.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="experience-card"
            >
              <div className="exp-date-wrapper">
                <span className="exp-date">{exp.period}</span>
              </div>
              
              <div className="experience-info">
                <h3 className="job-title">{exp.position}</h3>
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="company-link"
                >
                  {exp.company}
                </a>
                
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>

                <div className="tech-stack">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
