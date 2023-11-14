import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Details from "./pages/Details";
import SearchResults from "./pages/SearchResults";
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="/details/:mediaType/:id" element={<Details />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
