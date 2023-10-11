import loading from "../assets/images/loading.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main id="home" className="container">
      <div className="row d-flex justify-content-center pt-1">
        <div className="col-lg-6 pt-5">
          <div className="hero__image text-center">
            <img
              src={loading}
              className="shadow-sm bg-white my-2 border border-4 rounded-circle"
              width="300"
              alt="profile image"
            />
            <p>
            <span className="home__name lead text-black">Samuel Ayinde</span>
            <span className="lead fs-4" style={{ lineHeight: 1.5 }}>
              holds a PhD in mechanical engineering from the University of
              Michigan, Ann Arbor and a Graduate Certificate in counseling from
              the RCCGNA Seminary, Greenville, Texas, United States...{" "}
              <Link
                className="text-primary text-decoration-underline"
                to="/about"
              >
                Read more
              </Link>
            </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
