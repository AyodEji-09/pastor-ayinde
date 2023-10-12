import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
// import Home from "./pages/Home";
const Home = lazy(() => import("./pages/Home"));
const Songs = lazy(() => import("./pages/Songs"));
const Books = lazy(() => import("./pages/Books"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
// const Loading = lazy(() => import("./pages/Loading"));
const NotFound = lazy(() => import("./pages/Notfound"));

function App() {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Suspense fallback={''}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
