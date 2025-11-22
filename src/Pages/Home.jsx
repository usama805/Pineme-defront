import ANN from "../data/Announcement.jsx";
import Tasks from "../Components/Tasks.jsx";

export default function Home() {
  return (
    <div className="container py-4">
      <div className="card p-4 mb-3">
        <h1 className="hero-title mb-2">{ANN.title}</h1>
        <p className="hero-sub mb-3">{ANN.subtitle}</p>
        <div className="d-flex flex-wrap gap-2">
          <a
            className="btn btn-brand"
            href={ANN.links.hackquest}
            target="_blank"
            rel="noreferrer"
          >
            Join on HackQuest
          </a>
          <a
            className="btn btn-outline-light"
            href={ANN.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            Join AthenaX Discord
          </a>
        </div>
      </div>

      <div id="overview" className="card p-4 mb-3">
        <h5 className="mb-2">Overview</h5>
        <p className="mb-0 link-muted">{ANN.overview}</p>
      </div>

      <Tasks />

      <div id="timeline" className="card p-4 my-3">
        <h5 className="mb-3">Timeline</h5>
        <div className="row g-2">
          <div className="col-12 col-md-4">
            <div className="kpi">
              <div className="label text-white">Status</div>
              <div className="value text-white">{ANN.timeline.start}</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="kpi">
              <div className="label text-white">Runs For</div>
              <div className="value text-white">{ANN.timeline.duration}</div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="kpi">
              <div className="label text-white">Prize Pool</div>
              <div className="value text-white">{ANN.prize}</div>
            </div>
          </div>
        </div>
        <p className="mb-0 mt-3 link-muted">{ANN.timeline.note}</p>
      </div>

      <div id="support" className="card p-4 mb-4">
        <h5 className="mb-2">Support</h5>
        <p className="mb-3 link-muted">
          AthenaX will provide community support in Discord. Ask questions,
          share progress, and get feedback.
        </p>
        <a
          className="btn btn-brand"
          href={ANN.links.discord}
          target="_blank"
          rel="noreferrer"
        >
          Open Discord
        </a>
      </div>
    </div>
  );
}
