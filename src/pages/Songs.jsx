import transition from "../components/transition";
import { useLocation } from "react-router-dom";

const Musics = () => {
  const location = useLocation()
  console.log(location.pathname
    )
  return (
    <div className="container vw-100 vh-100 d-flex justify-content-center align-items-center">
      <h1>songs page</h1>
    </div>
  );
};

export default transition(Musics);