const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer p-1 text-center">
              <p className="m-0 p-0 text-light">
                Copyright © {year} Samuel Ayinde, All rights reserved.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
