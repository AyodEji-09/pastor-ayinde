import { Helmet } from "react-helmet";

const HelmetComponent = ({ pageTitle }) => {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
    </>
  );
};

export default HelmetComponent;
