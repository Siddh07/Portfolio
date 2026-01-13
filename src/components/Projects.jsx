import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetReposQuery } from "../store/githubApi";

function Projects() {
  // Filter state for category buttons
  const [filter, setFilter] = useState("All");

  // Fetch GitHub repos using RTK Query hook
  const {
    data: repos, // Array of GitHub repositories
    isLoading, // true while fetching
    isError, // true if fetch failed
    error, // Error object with details
  } = useGetReposQuery(3);

  // Extract unique categories from repos
  const categories = repos
    ? ["All", ...new Set(repos.map((p) => p.category))]
    : ["All"];

  // Filter projects based on selected category
  const filteredProjects = repos
    ? filter === "All"
      ? repos
      : repos.filter((p) => p.category === filter)
    : [];

  // LOADING STATE - Show skeleton while fetching
  if (isLoading) {
    return (
      <section id="portfolio" className="projects-section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="projects-main-title">Loading Projects...</h2>
          </div>

          <div className="row">
            {[1, 2, 3].map((i) => (
              <div key={i} className="col-lg-4 col-md-6 mb-4">
                <div className="project-card skeleton-loading">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-text skeleton-title"></div>
                    <div className="skeleton-text skeleton-desc"></div>
                    <div className="skeleton-text skeleton-desc"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // ERROR STATE - Show error message if fetch failed
  if (isError) {
    return (
      <section id="portfolio" className="projects-section">
        <div className="container">
          <div className="alert alert-danger text-center">
            <h3>Failed to load projects</h3>
            <p>{error?.message || "Could not fetch GitHub repositories"}</p>
            <p>Please try again later or check your internet connection.</p>
          </div>
        </div>
      </section>
    );
  }

  // MAIN RENDER - Show actual projects
  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        {/* Header Section */}
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
            Automatically synced from my GitHub repositories
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="cert-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="row">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="col-lg-4 col-md-6 mb-4"
              >
                <div className="project-card">
                  {/* Project Image */}
                  <div className="project-image-container">
                    {/* <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    /> */}
                    <div className="project-overlay">
                      <div className="overlay-content">
                        <div className="project-links">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-view-demo"
                          >
                            View Demo
                          </a>
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-view-repo"
                          >
                            View Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="project-info">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="project-category-tag">
                        {project.category}
                      </span>

                      {/* GitHub Stats */}
                      {(project.stars > 0 || project.forks > 0) && (
                        <div className="github-stats">
                          {project.stars > 0 && (
                            <span className="stat-item" title="Stars">
                              ⭐ {project.stars}
                            </span>
                          )}
                          {project.forks > 0 && (
                            <span className="stat-item" title="Forks">
                              🍴 {project.forks}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="tech-stack">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Last Updated */}
                    {project.updated && (
                      <p className="project-updated">
                        Updated: {project.updated}
                      </p>
                    )}
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
