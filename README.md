PinMe x DeFront AthenaX — Decentralized Frontend

This project is my submission for the PinMe x DeFront Hackathon, hosted on HackQuest and supported by AthenaX & NounsDAO.
It is a fully client-side React application designed to work 100% on IPFS, using HashRouter for safe routing on decentralized storage.

The goal of this project is to:

Build a simple and fast decentralized frontend

Show useful information about the Hackathon

Include a working DAO section (Treasury, Proposals, Token balances)

Allow users to view CIDs using a CID viewer

Deploy everything on PinMe (IPFS) with no backend

🚀 Features
✅ Hackathon Dashboard

Clean and fast UI

Shows hackathon tasks

Overview of the event

All content loads instantly (static files)

✅ DAO Section

Treasury Overview (ERC-20 balance reading)

Proposals Viewer

DAO data loading using Viem + Public RPC

Fully client-side (no backend / no server)

✅ CID Viewer

Enter any IPFS CID

Instantly view and open files through public gateways

Very helpful for decentralized frontend debugging

✅ Fully Web3-Friendly Deployment

Uses React + HashRouter for reliable IPFS routing

Deployed on PinMe

Works with any IPFS gateway


src/
│
├── Components/
│   ├── CIDViewer.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── Proposals.jsx
│   ├── Tasks.jsx
│   ├── TreasuryOverview.jsx
│   └── Timeline.jsx
│
├── Pages/
│   ├── CID.jsx
│   ├── DAO.jsx
│   └── Home.jsx
│
├── Data/
│   └── Announcement.jsx
│
├── lib/
│   ├── abi/
│   │   ├── erc20.json
│   │   └── governor.json
│   ├── chain.js
│   └── client.js
│
└── App.jsx



Tech Stack

React (Vite)

React Router (HashRouter)



PinMe (IPFS deployment)

Bootstrap for simple and fast styling

100% client-side — no backend needed




1 . Git Clone  

2 . npm install

3. npm run dev


How to Deploy on PinMe (IPFS)

