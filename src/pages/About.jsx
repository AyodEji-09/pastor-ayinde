import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";
import profile from "../assets/images/about_img.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Breadcrump page="About Me" />
        <div className="row my-3">
          <div className="col-lg-4 col-sm-6 col-md-5 my-1">
            <div className="about__image">
              <img
                src={profile}
                alt="profile image"
                className="img-fluid shadow rounded"
              />
            </div>
          </div>
          <div className="col-lg-6 my-1">
            <div className="about__desc">
              <p className="lh-2">
                <span className="home__name text-radial">Samuel Ayinde</span>
                <span className="lead">
                  holds a PhD in mechanical engineering from the University of
                  Michigan, Ann Arbor and a Graduate Certificate in counseling
                  from the RCCGNA Seminary, Greenville, Texas, United States. He
                  graduated with a First Class grade in Wood Products
                  Engineering and as the best graduating student of the
                  department of Agricultural and Environmental Engineering,
                  University of Ibadan, Nigeria.
                </span>
              </p>
              <p className="lead lh-2">
                He has authored a couple of books including Let the Lord be
                Magnified, Attaining Academic Excellence, Make Your Life Count
                for God, Set An Example, Exploring the Multidimensional Mercies
                of God, Let us dive into the Word, Volume 1, Secret Canons for
                Academic Excellence, Secret Treasures for Purpose Fulfillment,
                Volume 1-9, Hymns and Spiritual Songs, Volume 1 and Revival
                Songs, Volume 1-2.
              </p>
              <p className="lead lh-2">
                He is ordained and serving as an assistant pastor with the
                Redeemed Christian Church of God.
              </p>
              <p className="lead lh-2">
                He is passionate about people discovering, understanding, and
                fulfilling the purposes of God for their lives, with eternity in
                view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default transition(About);
