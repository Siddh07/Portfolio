function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'A modern and responsive e-commerce platform with product listings, shopping cart, and a clean design to ensure smooth and enjoyable online shopping.',
      image: '/Portfolio/assets/img/project/Ecommerce-website.png',
      demo: 'https://siddh07.github.io/Ecommerce/',
      repo: 'https://github.com/siddh07/Ecommerce'
    },
    {
      title: 'School Website (Template)',
      description: 'A clean and responsive school website template designed to showcase courses, events, and activities with a user-friendly layout for students and parents.',
      image: '/Portfolio/assets/img/project/school.png',
      demo: 'https://pujanjoci.github.io/School/',
      repo: 'https://github.com/pujanjoci/School'
    },
    {
      title: 'School Website (Template)',
      description: 'A lightweight and customizable template for school websites, featuring responsive design, easy navigation, and a simple structure for quick deployment.',
      image: '/Portfolio/assets/img/project/school-template.png',
      demo: 'https://pujanjoci.github.io/school-template/',
      repo: 'https://github.com/Siddh07/School-template'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Recent Projects.</p>
        </div>

        <div className="row portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div className="card shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#09203a', color: '#fff' }}>
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: '#fff' }}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={{ fontFamily: "'Roboto', sans-serif", fontSize: '0.95rem', color: '#e0e0e0' }}>
                    {project.description}
                  </p>
                  <div className="d-flex justify-content-between">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm">View Demo</a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">View Repo</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
