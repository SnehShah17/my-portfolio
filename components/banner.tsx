"use client"

import { useState, useEffect, useCallback } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import dynamic from "next/dynamic"
import "animate.css"
import TrackVisibility from "react-on-screen"

// Dynamically import Spline to avoid SSR issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div style={{ height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      Loading 3D scene...
    </div>
  ),
})

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState("")
  const [delta, setDelta] = useState(100 - Math.random() * 100)
  const period = 1500

  const tick = useCallback(() => {
    const toRotate = ["NEH SHAH"]
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(200)
    }
  }, [loopNum, isDeleting, text, setDelta, period])

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, delta)

    return () => {
      clearInterval(ticker)
    }
  }, [delta, tick])

  const handleConnectClick = () => {
    window.open("https://www.linkedin.com/in/sneh-shah-96984b190/", "_blank")
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I'm`}
                    <br></br>
                    <span className="wrap">S{text}</span>
                  </h1>
                  <p>
                    {" "}
                    As a dedicated and passionate data science professional, I am seeking full-time opportunities to
                    deepen my expertise in Data Science, Machine Learning, and Large Language Models (LLMs). With a
                    strong foundation in Data Structures and Algorithms (DSA), I am committed to leveraging advanced
                    analytical techniques and innovative solutions in the realms of AI and ML. My relentless curiosity
                    drives me to decode complex problems and contribute to cutting-edge research, ensuring impactful and
                    data-driven outcomes. Join me as I navigate the dynamic landscape of computer science with precision
                    and determination.
                  </p>
                  <button onClick={handleConnectClick}>
                  Let&apos;s Connect
                    <span style={{ marginLeft: "5px" }}>
                        <ArrowRightCircle size={25} />
                    </span>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <Spline scene="https://prod.spline.design/rc2M0BrTbwzu9KsB/scene.splinecode" style={{ height: "500px" }} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

