function Experience() {
  const experiences = [
    {
      company: 'Cloud Factory',
      link: 'https://www.cloudfactory.com/',
      position: 'Image and Data Analyst',
      period: 'Nov 2023 - Present',
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
      responsibilities: [
        'Assisted in developing and maintaining web applications using Laravel, enhancing functionality and performance.',
        'Collaborated with senior developers to troubleshoot and optimize backend systems for seamless user experiences.'
      ]
    },
    {
      company: 'We Inspire Nepal',
      link: 'https://weinspire.org.np/',
      position: 'Senior Researcher',
      period: 'Jun 2019 - Aug 2019',
      responsibilities: [
        'Led the planning and execution of successful events, developing innovative concepts and strategies to engage audiences.',
        'Conducted research to identify trends and opportunities, using insights to craft impactful event ideas and enhance attendee experiences.',
        'Managed all aspects of event coordination, from conceptualization to on-site execution, ensuring smooth operations and high satisfaction.'
      ]
    }
  ]

  return (
    <section id="experience" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            {experiences.map((exp, index) => (
              <div key={index} className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4 style={{ textAlign: 'left' }}>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ color: '#12d640' }}>
                    {exp.company}
                  </a>
                  <br />
                </h4>
                <h5 style={{ textAlign: 'left' }}>{exp.period}</h5>
                <p style={{ textAlign: 'left', color: '#fff', fontSize: '18px', padding: '10px 0' }}>
                  <em>{exp.position}</em>
                </p>
                <ul style={{ textAlign: 'left' }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
