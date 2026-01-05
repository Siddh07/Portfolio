import { motion } from 'framer-motion';

function About() {
  const roles = [
    { title: "Web Designer", icon: "ri-palette-line" },
    { title: "Developer", icon: "ri-code-box-line" },
    { title: "Data Analyst", icon: "ri-bar-chart-box-line" }
  ];

  return (
    <section id="about" className="about section-bg">
      <div className="about-me container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="profile-container"
            >
              <div className="profile-glow"></div>
              <div className="profile-frame">
                <img src="/assets/img/profile.png" className="img-fluid" alt="Siddhant Shrestha" />
              </div>
            </motion.div>
          </div>
          
          <div className="col-lg-8 pt-4 pt-lg-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="content"
            >
              <p>
                I am a web designer, developer, and data analyst specializing in modern web technologies and frameworks.
              </p>
              <p>
                My expertise includes working with <strong>HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, Bootstrap, WordPress, and PHP</strong>. Additionally, I have experience with frameworks like <strong>Django and Laravel</strong>, which allow me to create dynamic and robust web applications.
              </p>
              <p>
                I have created numerous projects utilizing the technologies mentioned above, all of which are showcased in this portfolio. These projects reflect my ability to design and develop high-quality web applications tailored to user needs.
              </p>

              <div className="focus-grid">
                {roles.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="focus-card"
                  >
                    <i className={role.icon}></i>
                    <span>{role.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
