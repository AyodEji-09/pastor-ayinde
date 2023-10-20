import hero_img from "../assets/images/hero_img.jpg";
import { Link } from "react-router-dom";
import transition from "../components/transition";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  useEffect(() => {
    setIsLoaded(true);
  });

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
      {" "}
      <main id="hero">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 vh-100 d-flex justify-content-center align-items-center position-relative">
              <div className="p-1 position-absolute bottom-0 right-0 bg-white shadow-lg rounded mx-1 mb-2">
                <p>
                  <span className="home__name text-radial">
                    Samuel Ayinde
                  </span>
                  <span className="lead" style={{ lineHeight: 1.55 }}>
                    holds a PhD in mechanical engineering from the University of
                    Michigan, Ann Arbor and a Graduate Certificate in counseling
                    from the RCCGNA Seminary, Greenville...
                    <Link
                      className="text-primary text-decoration-underline"
                      to="/about"
                    >
                      {" "}
                      Read more
                    </Link>
                  </span>
                </p>
                <div className="contact-icons">
                  <Link
                    className="d-flex align-items-center justify-content-center"
                    to="/books"
                  >
                    {" "}
                    Books
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      style={{ margin: "0 5px" }}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7S9 1 2 6v22c7-5 14 0 14 0s7-5 14 0V6c-7-5-14 1-14 1Zm0 0v21"
                      />
                    </svg>
                  </Link>
                  {/* <Link
            className="d-flex align-items-center justify-content-center"
            to="/songs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </g>
            </svg>
          </Link> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:sasamuelayinde@gmail.com"
                  >
                    Contact
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      width="1.5em"
                      height="1.5em"
                      style={{ margin: "0 5px" }}
                      viewBox="0 0 32 32"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                      >
                        <path d="M2 26h28V6H2zM2 6l14 10L30 6" />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default transition(Home);
