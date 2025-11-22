import ANN from "../data/Announcement.jsx";

export default function Tasks() {
  return (
    <section id="tasks" className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <h3 className="text-white mb-1">Hackathon Tasks</h3>
          <p className="mb-0" style={{ color: "#0c85ff" }}>
            Here’s what you need to build and deploy for the PinMe x AthenaX
            DeFront Hackathon.
          </p>
        </div>
        

        {/* Product-style cards */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
          {ANN.tasks.map((t, i) => (
            <div className="col d-flex" key={t.title}>
              <div
                className="card h-100 w-100 text-center border-0 p-4"
                style={{
                  background: "#101720",
                  borderRadius: "18px",
                }}
              >
                {/* Number badge */}
                <div
                  className="mx-auto mb-3 d-flex flex-column justify-content-center align-items-center"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#151c26",
                  }}
                >
                  <span
                    className="text-white fw-bold"
                    style={{ fontSize: "1.4rem", lineHeight: 1 }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="text-muted"
                    style={{ fontSize: "0.75rem", marginTop: 2 }}
                  >
                    Task
                  </span>
                </div>

                {/* Text */}
                <h5 className="text-white mb-2">{t.title}</h5>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "0.95rem" }}
                >
                  {t.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
