import transition from "../components/transition";
import Breadcrump from "../components/common/Breadcrump";
import { books } from "../utils/data";

const Books = () => {
  return (
    <section id="about">
      <div className="container">
        <Breadcrump page="All Books" />

        <div className="row">
          {books.map((book) => (
            <>
              <div
                key={book.title}
                className="col-lg-3 col-md-6 col-sm-6 mt-1 d-flex align-items-stretch"
              >
                <div className="card">
                  <img
                    src={book.img_url}
                    className="card-img-top"
                    alt={book.title}
                  />
                  <div className="card-body">
                    <a href={book.url} target="_blank">
                      <h5 className="card-title text-primary fw-bold">{book.title}</h5>
                    </a>
                    <p className="card-text">
                      {book.description.substring(0, 100)}...
                    </p>
                    <div className="d-flex gap-1 flex-wrap">
                      {book?.format?.map((format, index) => (
                        <a
                          key={index}
                          target="_blank"
                          href={format.url}
                          className="btn btn-outline-primary"
                          style={{ padding: "8px" }}
                        >
                          {format.type} <br />{" "}
                          <span
                            style={{ paddingTop: "3px" }}
                            className="text-secondary"
                          >
                            {format.price}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default transition(Books);
