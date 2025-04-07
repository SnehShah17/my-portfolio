"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import TrackVisibility from "react-on-screen"
import "animate.css"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [buttonText, setButtonText] = useState("Send Message")
  const [status, setStatus] = useState({})

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    setButtonText("Sending...")

    // Simulate form submission
    setTimeout(() => {
      setButtonText("Message Sent!")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setTimeout(() => {
        setButtonText("Send Message")
      }, 2000)
    }, 1000)
  }

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Get In Touch</h2>
                  <p className="contact-description">
                    Have a project in mind or want to discuss potential collaborations? Feel free to reach out, and I'll
                    get back to you as soon as possible.
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5} className="contact-info-column">
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A2FBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>snehsami@usc.edu</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A2FBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Phone</h3>
                  <p>+1 (213)-376-7639</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="icon-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4A2FBD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-details">
                  <h3>Location</h3>
                  <p>Los Angeles, CA, USA</p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={7} className="contact-form-column">
            <form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col sm={6} className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </Col>
                <Col sm={6} className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </Col>
              </Row>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="send-icon"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                {buttonText}
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

