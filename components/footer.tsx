"use client"

import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-scroll"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="footer-brand">
            <h2>Sneh Shah</h2>
            <p>Machine Learning Engineer & Developer</p>
          </Col>

          <Col md={4} className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://github.com/SnehShah17" target="_blank" rel="noopener noreferrer">
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
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sneh-shah17/" target="_blank" rel="noopener noreferrer">
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:snehsami@usc.edu">
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
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a href="https://medium.com/@snehshah7128" target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 1043.63 592.71"
                    fill="currentColor"
                >
                    <g>
                    <path d="M588.67,296.49c0,163.74-131.8,296.22-294.49,296.22S0,460.23,0,296.49,131.8,0,294.49,0s294.49,132.75,294.49,296.49"/>
                    <path d="M850.36,296.49c0,149.04-65.9,269.85-147.18,269.85s-147.18-120.81-147.18-269.85,65.9-269.85,147.18-269.85,147.18,120.81,147.18,269.85"/>
                    <path d="M1043.63,296.49c0,138.62-29.47,250.99-65.83,250.99s-65.83-112.36-65.83-250.99,29.47-250.99,65.83-250.99,65.83,112.36,65.83,250.99"/>
                    </g>
                </svg>
                </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center footer-copyright">
            <p>© {new Date().getFullYear()} Sneh Shah. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

