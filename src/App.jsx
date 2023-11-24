import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./pages/Details/Details";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/home/Home";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="font-mono">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            path="/details/:mediaType/:id"
            element={<Details />}
            errorElement={<Home />}
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
