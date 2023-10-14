import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";

const Books = () => {
  return (
    <section id="about">
      <div className="container vh-100">
        <Breadcrump page="All Books" />

      </div>
    </section>
  );
};

export default transition(Books);
