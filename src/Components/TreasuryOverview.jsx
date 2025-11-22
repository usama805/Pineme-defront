
import { useQuery } from "@tanstack/react-query";
import erc20 from "../lib/abi/erc20.json";
import { publicClient } from "../lib/client.js";

async function fetchTreasury({ treasuryAddress, tokens }) {
  console.log("🔎 fetchTreasury start", { treasuryAddress, tokens });

  const results = await Promise.all(
    tokens.map(async (t) => {
      try {
        console.log(" Reading balance for", t.symbol);


        const balance = await publicClient.readContract({
          address: t.address,
          abi: erc20,
          functionName: "balanceOf",
          args: [treasuryAddress],
        });

        const human =
          Number(balance) / 10 ** Number(t.decimals);

        console.log(" Token Loaded:", {
          symbol: t.symbol,
          raw: balance,
          human,
        });

        return { symbol: t.symbol, balance: human };
      } catch (err) {
        console.error(" Error loading token", t.symbol, err);
        return { symbol: t.symbol, balance: 0 };
      }
    })
  );

  return results;
}

export default function TreasuryOverview({ treasuryAddress, tokens }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["treasury", treasuryAddress],
    queryFn: () => fetchTreasury({ treasuryAddress, tokens }),
    enabled: !!treasuryAddress && tokens?.length > 0,
  });

  if (isLoading)
    return <div className="card p-3">Loading treasury…</div>;

  if (error) {
    console.error(" treasury error", error);
    return (
      <div className="card p-3">
        Failed to load treasury. Check console.
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="card p-3">No token balances found.</div>
    );
  }

  return (
    <div className="card p-3">
      <h6 className="mb-3">Treasury Balances</h6>
      <div className="row g-2 text-white">
        {data.map((r) => (
          <div
            className="col-6 col-md-4 col-lg-3"
            key={r.symbol}
          >
            <div className="kpi">
              <div className="label">{r.symbol}</div>
              <div className="value">
                {r.balance.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
