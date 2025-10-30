"use client";

import { useState, useEffect } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Stomach Cancer Prediction System",
      
      description:
        "A Streamlit-powered Cancer Prediction System leveraging machine learning models, SHAP to provide accurate, real-time predictions for cancer diagnosis and treatment outcomes.  Research paper published in The Scientific Temper.",
      tech: ["Python", "Machine Learning", "Streamlit"],
      liveUrl: "https://rushikeshyeole.vercel.app",
      githubUrl: "https://github.com/RushikeshYeole24/Stomach-Cancer-Project",
      status: "Live",
      year: "2024",
      imagePlaceholder: "/images/Stomach_Cancer.jpeg",
    },
    {
      id: 2,
      title: "InScribe",
      
      description:
        "InScribe is the ultimate Literary NFT Marketplace, where words meet the blockchain—mint, trade, and own unique literary works in the digital realm!",
      tech: [ "Web3.js", "MetaMask", "Ganache", "Truffle", "Next.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/RushikeshYeole24/InScribe",
      status: "Development",
      year: "2024",
      imagePlaceholder: "/images/Inscribe.png",
    },
    {
      id: 3,
      title: "Quantum Weather",
      category: "Data Visualization",
      description:
        "Advanced weather prediction platform using quantum computing principles, real-time satellite data, and interactive 3D climate modeling.",
      tech: ["React", "D3.js", "WebGL", "Python", "Quantum SDK"],
      liveUrl: "#",
      githubUrl: "https://github.com/rushikeshyeole/quantum-weather",
      status: "Beta",
      year: "2024",
      imagePlaceholder: "weather-dashboard-preview.jpg",
    },
    {
      id: 4,
      title: "MetaLearn Platform",
      category: "EdTech Innovation",
      description:
        "Immersive learning platform with VR/AR integration, AI tutors, blockchain certificates, and adaptive learning paths for personalized education.",
      tech: ["Vue.js", "WebXR", "Blockchain", "AI", "Cloud Computing"],
      liveUrl: "#",
      githubUrl: "https://github.com/rushikeshyeole/meta-learn",
      status: "Concept",
      year: "2024",
      imagePlaceholder: "elearning-platform-preview.jpg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "#00ff88";
      case "Development":
        return "#ff6b35";
      case "Beta":
        return "#4ecdc4";
      case "Concept":
        return "#a8e6cf";
      default:
        return "#666";
    }
  };

  return (
    <section id="projects" className="futuristic-projects-section">
      <div className="container">
        <div className="projects-header-futuristic">
          <div className="header-glow"></div>
          <h2 className="projects-title-futuristic">
            <span className="title-accent">Featured</span> Projects
          </h2>
          <p className="projects-subtitle">
            Innovative solutions at the intersection of technology and
            creativity
          </p>
        </div>

        <div
          className={`projects-grid-futuristic ${
            isVisible ? "animate-in" : ""
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card-futuristic ${
                hoveredProject === index ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Holographic border effect */}
              <div className="holographic-border"></div>

              {/* Status indicator */}
              <div
                className="project-status"
                style={
                  {
                    "--status-color": getStatusColor(project.status),
                  } as React.CSSProperties
                }
              >
                <div className="status-dot"></div>
                <span>{project.status}</span>
              </div>

              {/* Project image */}
              <div className="project-image-futuristic">
                {project.imagePlaceholder.startsWith("/images/") ? (
                  <img
                    src={project.imagePlaceholder}
                    alt={project.title}
                    className="project-image-actual"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                ) : null}
                <div
                  className={`image-placeholder ${
                    project.imagePlaceholder.startsWith("/images/")
                      ? "hidden"
                      : ""
                  }`}
                >
                  <div className="placeholder-grid"></div>
                  <div className="placeholder-overlay">
                    <div className="image-icon">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21,15 16,10 5,21" />
                      </svg>
                    </div>
                    <p className="placeholder-text">
                      {project.imagePlaceholder}
                    </p>
                  </div>
                  <div className="scan-line"></div>
                </div>
              </div>

              {/* Project content */}
              <div className="project-content-futuristic">
                <div className="project-meta">
                  <span className="project-year">{project.year}</span>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Tech stack with futuristic styling */}
                <div className="tech-stack-futuristic">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-chip">
                      <span className="chip-glow"></span>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    className="action-btn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-text">Launch</span>
                    <div className="btn-glow"></div>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="action-btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn-text">Source</span>
                    <div className="btn-glow"></div>
                  </a>
                </div>
              </div>

              {/* Particle effect overlay */}
              <div className="particle-overlay">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View more section */}
        <div className="view-more-section">
          <div className="more-projects-cta">
            <p>Explore more innovations</p>
            <a
              href="https://github.com/rushikeshyeole?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="explore-btn"
            >
              <span>View All Projects</span>
              <div className="explore-arrow">→</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
