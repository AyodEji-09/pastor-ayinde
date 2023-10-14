import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";

const About = () => {
  return (
    <section id="about">
      <div className="container vh-100">
        <Breadcrump page="About Page" />
       
      </div>
    </section>
  );
};

export default transition(About);
