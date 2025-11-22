import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer.jsx";
import DAO from "./Pages/DAO.jsx";
import CID from "./Pages/CID.jsx";
import Tasks from "./Components/Tasks.jsx";
import Timeline from "./Components/Timeline.jsx";

export default function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>

          
          <Route path="/" element={<Home />} />

          {/* Optional secondary route */}
          <Route path="/home" element={<Home />} />

          <Route path="/dao" element={<DAO />} /> 
          <Route path="/dao/:slug" element={<DAO />} />
          <Route path="/cid/:cid" element={<CID />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/timeline" element={<Timeline />} />

          <Route
            path="*"
            element={
              <div className="container py-5">
                <h5>Not Found</h5>
               
                <Link to="/">Go Home</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
