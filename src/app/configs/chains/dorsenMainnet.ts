import { defineChain } from "@reown/appkit/networks";



export const dorsenMainnet = defineChain({
  id: 99110,
  name: 'Dorsen',
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:99110',
  nativeCurrency: {
    name: 'Dorsen',
    symbol: 'DC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet-rpc.dorsenscan.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'DorsenScan Mainnet',
      url: 'https://dorsenscan.io/',
    },
  }
})