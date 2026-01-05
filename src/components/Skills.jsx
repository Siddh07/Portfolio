function Skills() {
  const languages = [
    { src: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-ar21.svg', alt: 'HTML5' },
    { src: 'https://www.vectorlogo.zone/logos/w3_css/w3_css-ar21.svg', alt: 'CSS3', height: '60', width: '90' },
    { src: 'https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg', alt: 'JavaScript', height: '60', width: '90' },
    { src: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-ar21.svg', alt: 'TypeScript', height: '60', width: '90' },
    { src: 'https://www.vectorlogo.zone/logos/php/php-ar21.svg', alt: 'PHP', height: '60', width: '90' },
    { src: 'https://www.vectorlogo.zone/logos/mysql/mysql-horizontal.svg', alt: 'MySQL', height: '70', width: '130' }
  ]

  const frameworks = [
    { src: 'https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg', alt: 'Laravel' },
    { src: 'https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg', alt: 'Bootstrap' },
    { src: 'https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg', alt: 'Vue.js' }
  ]

  const tools = [
    { src: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg', alt: 'Git' },
    { src: 'https://www.vectorlogo.zone/logos/figma/figma-ar21.svg', alt: 'Figma' },
    { src: 'https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.svg', alt: 'VS Code' },
    { src: 'https://www.vectorlogo.zone/logos/canva/canva-ar21.svg', alt: 'Canva' }
  ]

  return (
    <section id="skills" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up">
            {/* Languages and Databases */}
            <div className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style={{ background: '#fff', borderRadius: '8px' }}>
              <h4 style={{ textAlign: 'left', color: '#09203a' }}>Languages and Databases</h4>
              <p style={{ textAlign: 'left' }}>
                {languages.map((lang, index) => (
                  <img 
                    key={index}
                    src={lang.src} 
                    alt={lang.alt}
                    height={lang.height}
                    width={lang.width}
                  />
                ))}
              </p>
            </div>

            {/* Frameworks */}
            <div className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="lefade-up" data-aos-delay="100" style={{ background: '#fff', borderRadius: '8px' }}>
              <h4 style={{ textAlign: 'left', color: '#09203a' }}>Frameworks</h4>
              <p style={{ textAlign: 'left' }}>
                {frameworks.map((framework, index) => (
                  <img 
                    key={index}
                    src={framework.src} 
                    alt={framework.alt}
                  />
                ))}
              </p>
            </div>

            {/* Tools */}
            <div className="col-md-12 mt-4 mt-md-0 icon-box" data-aos="fade-up" data-aos-delay="100" style={{ background: '#fff', borderRadius: '8px' }}>
              <h4 style={{ textAlign: 'left', color: '#09203a' }}>Tools</h4>
              <p style={{ textAlign: 'left' }}>
                {tools.map((tool, index) => (
                  <img 
                    key={index}
                    src={tool.src} 
                    alt={tool.alt}
                  />
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
