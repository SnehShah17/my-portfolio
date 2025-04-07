"use client"

import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import "animate.css"

export const Skills = () => {
  const skills = [
    {
      title: "Machine Learning",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"></path>
          <path d="M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M20 12h2"></path>
          <path d="M2 12h2"></path>
          <path d="M18.36 5.64l-1.41 1.41"></path>
          <path d="M7.05 16.95l-1.41 1.41"></path>
          <path d="M16.95 16.95l1.41 1.41"></path>
          <path d="M5.64 5.64l1.41 1.41"></path>
        </svg>
      ),
      items: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "Llama Index", "Generative AI", "NLP", "LLMs (Llama, Mistral, GPT)"],
    },
    {
      title: "Programming",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      items: ["Python", "C++", "JavaScript", "TypeScript", "React", "Node.js"],
    },
    {
      title: "Data Engineering",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      items: ["SQL", "MongoDB", "VectorDB (ChromaDB, PineCone)", "PySpark", "ETL Pipelines", "Data Warehousing"],
    },
    {
      title: "Data Analysis",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <line x1="2" y1="20" x2="22" y2="20"></line>
        </svg>
      ),
      items: [
        "Pandas",
        "NumPy",
        "Data Visualization (Tableau, Power BI, Matplotlib, Seaborn, Plotly)",
        "Excel",
        "Statistical Analysis",
        "Bayesian Optimization",
      ],
    },
    {
      title: "DevOps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      items: ["Docker", "CI/CD", "AWS (Redshift, S3, Airflow, Glue)", "GCP"],
    },
    {
      title: "Software Architecture",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4A2FBD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      items: ["System Design", "Microservices", "API Development", "FastAPI", "REST APIs",  "Git", "Agile / Scrum"],
    },
  ]

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Skills & Expertise</h2>
                  <div className="skill-bx">
                    <p className="skill-description">
                      My technical toolkit spans machine learning, software development, and data engineering, enabling
                      me to build end-to-end intelligent solutions.
                    </p>
                    <Row className="skill-cards">
                      {skills.map((skill, index) => (
                        <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                          <div className="skill-card">
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-content">
                              <h3>{skill.title}</h3>
                              <ul>
                                {skill.items.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
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

