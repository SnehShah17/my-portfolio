"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import "animate.css"

export const Projects = () => {
  const projects = [
    {
      title: "HashBERT: Rolling Hash-Based Lightweight Transformer",
      description:
        "Developed HashBERT, a lightweight BERT-based NLP model using dynamically generated rolling hash embeddings, achieving over 93% model compression with minimal accuracy loss for on-device sentiment analysis on the Amazon Reviews dataset.",
      imgUrl: "/hashbert.png",
      technologies: ["PyTorch", "BERT / DistilBERT", "Deep Learning", "Rolling Hash", "Word2Vec", "EELBERT"],
      link: "https://github.com/SnehShah17/HashBERT",
    },
    {
      title: "Urban Futures Data Core",
      description:
        "Enhanced research accessibility by developing a deep learning-based NLP model that accurately predicted and extracted dataset names from research papers.",
      imgUrl: "/urbancores.png",
      technologies: ["Deep Learning", "NLP", "AWS"],
      link: "#",
    },
    {
      title: "Hurricane Intensity Estimation",
      description:
        "Engineered a VGG16-based CNN model to estimate hurricane intensities from satellite imagery, achieving 92% accuracy through transfer learning.",
      imgUrl: "/hurricane.png",
      technologies: ["PyTorch", "OpenCV", "Deep Learning"],
      link: "https://github.com/SnehShah17/Deep-Learning-Based-Hurricane-Intensity-Estimation-",
    },
    {
      title: "Football Match Prediction",
      description:
        "Developed a predictive model for football match outcomes using exploratory data analysis and multi-output regression, achieving 98.58% accuracy.",
      imgUrl: "/football.png",
      technologies: ["Machine Learning", "Regression", "IEEE Publication"],
      link: "https://github.com/SnehShah17/Football-Match-Prediction-Using-EDA-and-Multi-Output-Regression",
    },
    {
      title: "Generic Medicine Recommender System",
      description:
        "Created a recommendation system for generic medicines that incorporates user feedback to improve suggestions over time.",
      imgUrl: "/recommendation.png",
      technologies: ["Recommendation Systems", "Healthcare", "Springer Publication"],
      link: "#",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(Array(projects.length).fill(false))

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const toggleFlip = (index: number) => {
    const newFlipped = [...isFlipped]
    newFlipped[index] = !newFlipped[index]
    setIsFlipped(newFlipped)
  }

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject()
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // Calculate visible projects (3 at a time)
  const visibleProjects: { project: { title: string; description: string; imgUrl: string; technologies: string[]; link: string }; index: number; position: number }[] = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % projects.length
    visibleProjects.push({
      project: projects[index],
      index,
      position: i,
    })
  }

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Projects</h2>
                  <p className="project-description">
                    Check out some of my recent projects showcasing my expertise in machine learning and software
                    development.
                  </p>

                  <div className="carousel-container">
                    <button className="carousel-btn prev-btn" onClick={prevProject}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                    </button>

                    <div className="carousel-track">
                      {visibleProjects.map(({ project, index, position }) => (
                        <div
                          key={index}
                          className={`project-card position-${position} ${isFlipped[index] ? "flipped" : ""}`}
                          onClick={() => toggleFlip(index)}
                        >
                          <div className="card-inner">
                            <div className="card-front">
                              <div className="project-img" style={{ backgroundImage: `url(${project.imgUrl})` }}></div>
                              <h3>{project.title}</h3>
                              <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                  <span key={i} className="tech-badge">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <p className="flip-prompt">Click to see details</p>
                            </div>
                            <div className="card-back">
                              <h3>{project.title}</h3>
                              <p>{project.description}</p>
                              <div className="tech-stack">
                                {project.technologies.map((tech, i) => (
                                  <span key={i} className="tech-badge">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                View Project
                              </a>
                              <p className="flip-prompt">Click to flip back</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button className="carousel-btn next-btn" onClick={nextProject}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>

                  <div className="carousel-dots">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(i)}
                      ></button>
                    ))}
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

