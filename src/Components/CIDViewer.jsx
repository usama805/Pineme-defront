import { useState } from 'react';

const GATEWAY = 'https://ipfs.io/ipfs/';

export default function CIDViewer({ initialCid = '' }) {
  const [cid, setCid] = useState(initialCid);
  const url = cid ? `${GATEWAY}${cid}` : '';

  return (
    <div className="card p-3">
      <h6 className="mb-2">CID Viewer</h6>
      <input
        className="form-control mb-2"
        placeholder="Paste CID (bafy...)"
        value={cid}
        onChange={(e) => setCid(e.target.value.trim())}
      />
      {cid && (
        <p className="mb-2">
          <a href={url} target="_blank" rel="noreferrer">
            Open on IPFS Gateway
          </a>
        </p>
      )}
      {cid && (
        <iframe
          title="ipfs-preview"
          src={url}
          style={{ width: '100%', height: 320, border: '1px solid #1d2532', borderRadius: 12 }}
        />
      )}
    </div>
  );
}
