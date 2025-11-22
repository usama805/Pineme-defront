import { Link } from "react-router-dom";
import logo from "../assets/pinme.png"; 

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg sticky-top ax-nav">
      <div className="container py-2">
      
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <span
            className="d-inline-block rounded"
            style={{
              width: 36,
              height: 36,
              // background: "linear-gradient(135deg,#5ad4ff,#9dffb3)",
              // border: "1px solid #1d2532",
            }}
          />
          <span className="fw-bold d-flex align-items-center gap-2">
            <img src={logo} alt="PinMe" style={{ height: 30 }} />
            PinMe x DeFront AthenaX
          </span>
        </Link>

     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#axNav"
          aria-controls="axNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="axNav">
          <ul className="navbar-nav ms-auto gap-lg-3">

           <li className="nav-item">
            <Link className="nav-link ax-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link ax-link" to="/tasks">Tasks</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link ax-link" to="/timeline">Timeline</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link ax-link" to="/dao">DAO</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
