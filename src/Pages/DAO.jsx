import TreasuryOverview from "../Components/TreasuryOverview.jsx";
import Proposals from "../Components/Proposals.jsx";
const DAO_DATA = {
  name: "DAO",
  treasury: "0x0bc3807ec262cb779b38d65b38158acc3bfedb7e", 

  governor: "",
  tokens: [
    {
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
      symbol: "USDC",
      decimals: 6,
    },
    {
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
      symbol: "DAI",
      decimals: 18,
    },
  ],
  proposalIds: [],
  proposalDocs: {},
};

export default function DAO() {
  const dao = DAO_DATA;

  const hasTreasury =
    !!dao.treasury &&
    dao.treasury !==
      "0x0000000000000000000000000000000000000000";

  return (
    <div className="container py-4">
      <h4 className="mb-3">{dao.name} — DAO Dashboard</h4>

      {!hasTreasury && (
        <div className="alert alert-warning">
          Paste real <strong>treasury</strong> address to load data.
        </div>
      )}

      {hasTreasury && (
        <div className="mb-4 text-white" >
          <h6 className="mb-2">Treasury Overview</h6>
          <TreasuryOverview
            treasuryAddress={dao.treasury}
            tokens={dao.tokens}
          />
        </div>
      )}
    </div>
  );
}
