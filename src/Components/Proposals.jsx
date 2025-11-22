import { useQuery } from '@tanstack/react-query';
import governor from '../lib/abi/governor.json';
import { publicClient } from '../lib/client.js';

export default function Proposals({ governorAddress, proposalIds = [], docsMap = {} }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['proposals', governorAddress, proposalIds],
    queryFn: async () =>
      Promise.all(
        proposalIds.map(async (id) => {
          const state = await publicClient.readContract({
            address: governorAddress,
            abi: governor,
            functionName: 'state',
            args: [id],
          });
          return { id, state, cid: docsMap[id] || null };
        })
      ),
  });

  if (isLoading) return <div className="card p-3 mt-3">Loading proposals…</div>;
  if (error) return <div className="card p-3 mt-3">Failed to load proposals.</div>;

  return (
    <div className="card p-3 mt-3">
      <h6 className="mb-3">Proposals</h6>
      <ul className="list-unstyled mb-0">
        {data.map((p) => (
          <li key={p.id} className="mb-2">
            <strong className="mono">#{String(p.id)}</strong> — state: {p.state}
            {p.cid && <> — <a href={`#/cid/${p.cid}`}>Docs (CID)</a></>}
          </li>
        ))}
      </ul>
    </div>
  );
}
