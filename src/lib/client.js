import { createPublicClient, http } from 'viem';
import { CHAIN } from './chain.js';

export const publicClient = createPublicClient({
  chain: CHAIN,
  transport: http(CHAIN.rpcUrls.default.http[0]),
});
