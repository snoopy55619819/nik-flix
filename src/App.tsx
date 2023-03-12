import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Video } from "./routes";
import { Header } from "./components/header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </Router>
  );
}

export default App;
