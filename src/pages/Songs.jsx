import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";

const Musics = () => {
  return (
    <section id="about">
      <div className="container vh-100">
        <Breadcrump page="All Songs" />

      </div>
    </section>
  );
};

export default transition(Musics);