import Breadcrump from "../components/common/Breadcrump";
import transition from "../components/transition";

const Podcasts = () => {
  return (
    <section id="podcasts">
      <div className="container vh-100">
        <Breadcrump page="Podcasts" />
      </div>
    </section>
  );
};

export default transition(Podcasts);
