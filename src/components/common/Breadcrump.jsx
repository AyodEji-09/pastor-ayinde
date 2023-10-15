import { Link } from "react-router-dom";
const Breadcrump = ({ page }) => {
  return (
    <div className="container pt-5">
      <div className="row pt-2">
        <div className="col-lg-12 inner p-1 rounded shadow">
          <h1 className="text-white fs-1">{page}</h1>
          <p>
            <Link className="text-light" to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breadcrump;
