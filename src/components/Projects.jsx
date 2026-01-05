import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Website',
      category: 'Web App',
      description: 'A modern and responsive e-commerce platform with product listings, shopping cart, and a clean design.',
      image: '/assets/img/project/Ecommerce-website.png',
      demo: 'https://siddh07.github.io/Ecommerce/',
      repo: 'https://github.com/siddh07/Ecommerce',
      tech: ['React', 'Vite', 'JavaScript', 'CSS3']
    },
    {
      title: 'School Website (Template)',
      category: 'Frontend Template',
      description: 'A professional school UI developed using React and Tailwind CSS for interactive school management features.',
      image: '/assets/img/project/school.png',
      demo: 'https://pujanjoci.github.io/School/',
      repo: 'https://github.com/pujanjoci/School',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript']
    },
    {
      title: 'School Template V2',
      category: 'Frontend Template',
      description: 'A modular school website template leveraging Vite and React for a performant development experience.',
      image: '/assets/img/project/school-template.png',
      demo: 'https://pujanjoci.github.io/school-template/',
      repo: 'https://github.com/Siddh07/School-template',
      tech: ['React', 'Tailwind CSS', 'Vite', 'JavaScript']
    }
  ];

  const categories = ['All', 'Web App', 'Frontend Template'];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        <div className="section-header text-center mb-5">
           <motion.span 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="projects-label"
           >
             PROJECTS
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="projects-main-title"
           >
             RECENT PROJECTS
           </motion.h2>
           <div className="section-divider mx-auto"></div>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="projects-subtitle"
           >
             A showcase of my recent work in frontend development and web design.
           </motion.p>
        </div>

          

        <motion.div layout className="row">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="col-lg-4 col-md-6 mb-4"
              >
                <div className="project-card ">
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <div className="project-links">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-view-demo">View Demo</a>
                          <a href={project.repo} target="_blank" rel="noopener noreferrer" className="btn-view-repo">View Repo</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                       <span className="project-category-tag">{project.category}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-stack">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
