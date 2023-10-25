import Breadcrump from "../components/common/Breadcrump";
import transition from "../components/transition";


const Blogs = () => {
  return (
    <section id="blogs">
      <div className="container vh-100">
        <Breadcrump page="Blogs" />
      </div>
    </section>
  );
};

export default transition(Blogs);
