"use client"

import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import TrackVisibility from "react-on-screen"
import "animate.css"

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <p>
                    As a dedicated and passionate data science professional, I am seeking full-time opportunities to
                    deepen my expertise in Data Science, Machine Learning, and Large Language Models (LLMs).
                  </p>
                  <p>
                    With a strong foundation in Data Structures and Algorithms (DSA), I am committed to leveraging
                    advanced analytical techniques and innovative solutions in the realms of AI and ML.
                  </p>
                  <p>
                    My relentless curiosity drives me to decode complex problems and contribute to cutting-edge
                    research, ensuring impactful and data-driven outcomes.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6}>
            <div className="profile-img-container">
              <Image
                src="/Sneh_Photo_Latest.jpg"
                alt="Sneh Shah Profile"
                width={300}
                height={100}
                className="profile-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

