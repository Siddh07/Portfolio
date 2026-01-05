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
    <section  className="skills-section">
      <div className="container-fluid p-0">
        <div className="skills-wrapper d-flex align-items-stretch">
          
        

          {/* Main Grid Content */}
          <div className="skills-grid-container flex-grow-1 p-4 p-md-5 d-flex flex-column justify-content-center">
             
             {/* Header Section */}
             <div className="text-center mb-5">
                <h2 className="what-i-do-title">Technical Skills</h2>
                <p className="what-i-do-text mx-auto">
                  Technologies & Tools I Use to Build Modern Web Applications
                </p>
             </div>

             {/* Internal Scrollable Grid Container */}
             <div className="skills-internal-scroll">
                <div className="row justify-content-center">
                   {[...languages, ...frameworks, ...tools].map((skill, index) => (
                      <div key={index} className="col-6 col-md-4 col-lg-3 p-3 mb-3">
                         <div className="skill-card">
                            <div className="skill-icon">
                               <img src={skill.src} alt={skill.alt} />
                            </div>
                            <div className="skill-name">{skill.alt}</div>
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          {/* Right Decoration */}
          <div className="skills-sidebar-right d-none d-md-flex align-items-center justify-content-center">
             <div className="dashed-line"></div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
