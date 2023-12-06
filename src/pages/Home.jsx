import { Link } from "react-router-dom";
import transition from "../components/transition";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HelmetComponent from "../components/common/Helmet";
import Slider from "react-slick";
import { books } from "../utils/data";
import svg from "../assets/images/svg.svg";
import { FaBookOpen, FaAmazon, FaYoutube, FaArrowRight } from "react-icons/fa";
import YouTube from "react-youtube";
import about from "../assets/images/inner.jpg";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [loading, setLoading] = useState(true);

  const videoId = [
    "Z-ZrpMgybdA",
    "ybIig_PfM1M",
    "89zqUxtbD8A",
    "Up9vCsFTJ5w",
    "flIpRMqwVuY",
    "k-HtjTOAgSY",
  ];

  const opts = {
    height: 250,
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    event.target.pauseVideo();
    setLoading(false);
  };

  useEffect(() => {
    setIsLoaded(true);
  });

  let settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      initial={false}
      animate={
        isLoaded && isInView
          ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
          : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
      }
      transition={{ duration: 1, delay: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
    >
      <HelmetComponent pageTitle="Samuel Ayinde | Home" />
      <main>
        <section id="hero">
          <div className="container pt-5">
            <div className="row pt-5 vh-100">
              <div className="col-lg-4">
                <div className="hero__text shadow">
                  <p className="lead text-dark lh-2">
                    <q>
                      Remember your leaders, those who spoke to you the word of
                      God. Consider the outcome of their way of life, and
                      imitate their faith
                    </q>{" "}
                    - <b>Hebrews 13:7</b>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column justify-content-end align-items-center">
                <h1 className="hero__name">Pastor Samuel Ayinde</h1>
                <div className="mb-5 d-flex justify-content-start align-items-center flex-wrap gap-lg-2 gap-1 bg-white p-1 shadow rounded">
                  <a
                    style={{ padding: "6px" }}
                    title="Amazon"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="http://rb.gy/uord9l"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0C6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387c.176-.857.896-1.271 1.703-1.271c.435 0 .929.16 1.188.55c.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298c1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133c-.336.595-.87.961-1.465.961c-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997c.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16C3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z" />
                          <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204c.135.176-.004.966-.233 1.533c-.23.563-.572.961-.762 1.115c-.191.154-.333.094-.23-.137c.105-.23.684-1.663.455-1.963c-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024c-.193.021-.245.027-.274-.032c-.074-.209.779-.556 1.347-.623Z" />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="Youtube"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="https://www.youtube.com/@samuelayinde1"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 256 180"
                      >
                        <path
                          fill="red"
                          d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                        />
                        <path
                          fill="#FFF"
                          d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* facebook  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Facebook"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100095712720325&mibextid=ZbWKwL"
                  >
                    <i>
                      <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 486.037 1000"
                      >
                        <path
                          d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                          fill="#4267B2"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* instagram  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Instagram"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="http://instagram.com/thesamuelayinde"
                  >
                    <i>
                      <svg width="1.5em" height="1.5em" viewBox="0 0 256 256">
                        <path
                          d="M128 80a48 48 0 1 0 48 48a48.054 48.054 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32zm44-132H84a56.064 56.064 0 0 0-56 56v88a56.064 56.064 0 0 0 56 56h88a56.064 56.064 0 0 0 56-56V84a56.064 56.064 0 0 0-56-56zm40 144a40.045 40.045 0 0 1-40 40H84a40.045 40.045 0 0 1-40-40V84a40.045 40.045 0 0 1 40-40h88a40.045 40.045 0 0 1 40 40zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12z"
                          fill="#E1306C"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* twitter  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Twitter"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="http://twitter.com/sasamuelayinde"
                  >
                    {""}
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
                            fill="#1DA1F2"
                          />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="Mail"
                    className="rounded shadow border-2 border"
                    target="_blank"
                    href="mailto:sasamuelayinde@gmail.com;"
                  >
                    {""}
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 32 32"
                      >
                        <g
                          fill="none"
                          stroke="#626262"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        >
                          <path d="M2 26h28V6H2zM2 6l14 10L30 6" />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="LinkTree"
                    className="rounded shadow-lg border-2 border"
                    target="_blank"
                    href="https://linktr.ee/thesamuelayinde"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about__section" className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-1 d-flex justify-content-lg-center">
                <div>
                  <img
                    src={about}
                    alt="Pastor Samuel Ayinde"
                    className="img-thumbnail rounded-pill border border-2"
                  />
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center my-1">
                <div className="bg-transparent">
                  <h1 className="fw-bolder">About Me -</h1>
                  <div className="about__section-desc mt-2">
                    <p className="lead" style={{ lineHeight: "1.5" }}>
                      Samuel Ayinde is an ordained and a serving assistant
                      pastor with the Redeemed Christian Church of God.
                    </p>
                    <p className="lead" style={{ lineHeight: "1.5" }}>
                      Samuel Ayinde has authored a couple of books including Let
                      the Lord be Magnified, Attaining Academic Excellence, Make
                      Your Life Count for God, Set An Example, Exploring the
                      Multidimensional Mercies of God, Let us dive into the
                      Word...
                    </p>
                    <Link to="/about" className="btn btn-outline-primary">
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="books_section">
          <div className="container">
            <div className="section_header mb-3">
              <h1 className="fw-bolder">Books -</h1>
              <p style={{ color: "#6e60bf" }} className="lead">
                Check out all my books
              </p>
              <Link
                to="/books"
                className="btn btn-sm btn-outline-primary d-inline-flex align-items-center"
              >
                Books <FaBookOpen style={{ margin: "0 3px" }} />
              </Link>
              <a
                target="_blank"
                href="https://www.amazon.com/stores/author/B086H94RYR/allbooks?ingress=0&visitId=5979cf9b-5afd-4218-929a-8d786c56faa6"
                className="btn btn-sm btn-outline-secondary d-inline-flex align-items-center ms-1"
              >
                Amazon <FaAmazon style={{ margin: "0 3px" }} />
              </a>
            </div>
            <div className="row">
              {/* <div className=""> */}
              <Slider {...settings}>
                {books.map((book, index) => (
                  <div
                    className="d-flex align-items-stretch"
                    key={book.title + index}
                    // style={{ height: "550px" }}
                  >
                    <div className="book__slider card me-2">
                      <div
                        className="card-body  rounded shadow-sm"
                        style={{ zIndex: 1 }}
                      >
                        <small>{book.dop}</small>
                        <a href={book.url} target="_blank">
                          <h5 className="card-title fs-4 fw-bold text-primary fw-bold">
                            {book.title}
                          </h5>
                        </a>
                        <p className="card-text">
                          {book.description.substring(0, 100)}...
                        </p>
                        <div className="d-flex gap-1 flex-wrap">
                          <span>Formats: </span>
                          {book?.format?.map((format, index) => (
                            <a key={index} target="_blank" href={format.url}>
                              {format.type}
                            </a>
                          ))}
                        </div>
                        <hr />
                        <div className="d-flex gap-1 flex-wrap">
                          <span>Pages: </span>
                          <em className="fst-italic">{book.pages}</em>
                        </div>
                      </div>
                      <img
                        src={svg}
                        alt="svg"
                        style={{ zIndex: 0 }}
                        className="img-fluid position-absolute bottom-0"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
              {/* </div> */}
            </div>
          </div>
        </section>

        {/* contact section  */}
        <section id="contact_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <Link to="/contact" className="btn btn-lg btn-outline-light">
                  Contact Me <FaArrowRight />
                </Link>
                <div className="d-flex justify-content-center align-items-center flex-wrap gap-lg-2 gap-1 mt-3 shadow rounded">
                  <a
                    style={{ padding: "6px" }}
                    title="Amazon"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="http://rb.gy/uord9l"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 16 16"
                      >
                        <g fill="currentColor">
                          <path d="M10.813 11.968c.157.083.36.074.5-.05l.005.005a89.521 89.521 0 0 1 1.623-1.405c.173-.143.143-.372.006-.563l-.125-.17c-.345-.465-.673-.906-.673-1.791v-3.3l.001-.335c.008-1.265.014-2.421-.933-3.305C10.404.274 9.06 0 8.03 0C6.017 0 3.77.75 3.296 3.24c-.047.264.143.404.316.443l2.054.22c.19-.009.33-.196.366-.387c.176-.857.896-1.271 1.703-1.271c.435 0 .929.16 1.188.55c.264.39.26.91.257 1.376v.432c-.199.022-.407.044-.621.065c-1.113.114-2.397.246-3.36.67C3.873 5.91 2.94 7.08 2.94 8.798c0 2.2 1.387 3.298 3.168 3.298c1.506 0 2.328-.354 3.489-1.54l.167.246c.274.405.456.675 1.047 1.166ZM6.03 8.431C6.03 6.627 7.647 6.3 9.177 6.3v.57c.001.776.002 1.434-.396 2.133c-.336.595-.87.961-1.465.961c-.812 0-1.286-.619-1.286-1.533ZM.435 12.174c2.629 1.603 6.698 4.084 13.183.997c.28-.116.475.078.199.431C13.538 13.96 11.312 16 7.57 16C3.832 16 .968 13.446.094 12.386c-.24-.275.036-.4.199-.299l.142.087Z" />
                          <path d="M13.828 11.943c.567-.07 1.468-.027 1.645.204c.135.176-.004.966-.233 1.533c-.23.563-.572.961-.762 1.115c-.191.154-.333.094-.23-.137c.105-.23.684-1.663.455-1.963c-.213-.278-1.177-.177-1.625-.13l-.09.009c-.095.008-.172.017-.233.024c-.193.021-.245.027-.274-.032c-.074-.209.779-.556 1.347-.623Z" />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="Youtube"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="https://www.youtube.com/@samuelayinde1"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 256 180"
                      >
                        <path
                          fill="red"
                          d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
                        />
                        <path
                          fill="#FFF"
                          d="m102.421 128.06l66.328-38.418l-66.328-38.418z"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* facebook  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Facebook"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100095712720325&mibextid=ZbWKwL"
                  >
                    <i>
                      <svg
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 486.037 1000"
                      >
                        <path
                          d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                          fill="#4267B2"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* instagram  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Instagram"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="http://instagram.com/thesamuelayinde"
                  >
                    <i>
                      <svg width="1.5em" height="1.5em" viewBox="0 0 256 256">
                        <path
                          d="M128 80a48 48 0 1 0 48 48a48.054 48.054 0 0 0-48-48zm0 80a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32zm44-132H84a56.064 56.064 0 0 0-56 56v88a56.064 56.064 0 0 0 56 56h88a56.064 56.064 0 0 0 56-56V84a56.064 56.064 0 0 0-56-56zm40 144a40.045 40.045 0 0 1-40 40H84a40.045 40.045 0 0 1-40-40V84a40.045 40.045 0 0 1 40-40h88a40.045 40.045 0 0 1 40 40zm-20-96a12 12 0 1 1-12-12a12 12 0 0 1 12 12z"
                          fill="#E1306C"
                        />
                      </svg>
                    </i>
                  </a>
                  {/* twitter  */}
                  <a
                    style={{ padding: "6px" }}
                    title="Twitter"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="http://twitter.com/sasamuelayinde"
                  >
                    {""}
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none">
                          <path
                            d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 0 0 2.048-2.578a9.3 9.3 0 0 1-2.958 1.13a4.66 4.66 0 0 0-7.938 4.25a13.229 13.229 0 0 1-9.602-4.868c-.4.69-.63 1.49-.63 2.342A4.66 4.66 0 0 0 3.96 9.824a4.647 4.647 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568a4.692 4.692 0 0 1-2.104.08a4.661 4.661 0 0 0 4.352 3.234a9.348 9.348 0 0 1-5.786 1.995a9.5 9.5 0 0 1-1.112-.065a13.175 13.175 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254c0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003z"
                            fill="#1DA1F2"
                          />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="Mail"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="mailto:sasamuelayinde@gmail.com;"
                  >
                    {""}
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 32 32"
                      >
                        <g
                          fill="none"
                          stroke="#626262"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        >
                          <path d="M2 26h28V6H2zM2 6l14 10L30 6" />
                        </g>
                      </svg>
                    </i>
                  </a>
                  <a
                    style={{ padding: "6px" }}
                    title="LinkTree"
                    className="rounded-circle shadow border-2 border btn btn-md btn-outline-light"
                    target="_blank"
                    href="https://linktr.ee/thesamuelayinde"
                  >
                    <i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m13.736 5.853l4.005-4.117l2.325 2.38l-4.2 4.005h5.908v3.305h-5.937l4.229 4.108l-2.325 2.334l-5.74-5.769l-5.741 5.769l-2.325-2.325l4.229-4.108H2.226V8.121h5.909l-4.2-4.004l2.324-2.381l4.005 4.117V0h3.472zm-3.472 10.306h3.472V24h-3.472z"
                        />
                      </svg>
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="video_section">
          <div className="container">
            <div className="section_header mb-3">
              <h1 className="fw-bolder">Videos -</h1>
              <a
                target="_blank"
                href="https://www.youtube.com/@samuelayinde1"
                className="btn btn-sm btn-outline-danger d-inline-flex align-items-center"
              >
                More Videos <FaYoutube style={{ margin: "0 3px" }} />
              </a>
            </div>
            <div className="row g-2">
              {videoId.map((id) => (
                <div key={id} className="col-lg-4 col-md-6 position-relative">
                  {loading ? (
                    <>
                      <div
                        className="spinner-border text-danger position-absolute top-50 start-50"
                        role="status"
                      ></div>
                    </>
                  ) : null}
                  <YouTube
                    iframeClassName={"w-100 rounded shadow"}
                    opts={opts}
                    videoId={id}
                    onReady={_onReady}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default transition(Home);
