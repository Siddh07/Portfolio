import { motion } from 'framer-motion';

function Links() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Siddh07',
      logo: `${import.meta.env.BASE_URL}assets/img/links/github.svg`
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/siddhant-shrestha-341853198/',
      logo: `${import.meta.env.BASE_URL}assets/img/links/linkedin.svg`
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/shresthasiddhant',
      logo: `${import.meta.env.BASE_URL}assets/img/links/instagram.svg`
    },
    {
      name: 'Youtube',
      url: 'https://www.youtube.com',
      logo: `${import.meta.env.BASE_URL}assets/img/links/youtube.svg`
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="links" className="links-section">
      <div id="container">
        <h2 className="links-title" data-aos="fade-up">Let's Connect</h2>
        
        <motion.a 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="profile_link" 
          href="https://github.com/Siddh07.png" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img className="profile" src="https://github.com/Siddh07.png" alt="Profile" />
        </motion.a>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="social-grid"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              className="social-card"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-icon-wrapper">
                <img src={link.logo} alt={`${link.name} Logo`} />
              </div>
              <span className="social-name">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Links
