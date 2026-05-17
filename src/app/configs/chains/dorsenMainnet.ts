import { defineChain } from "@reown/appkit/networks";



export const dorsenMainnet = defineChain({
  id: 1370,
  name: 'Dorsen',
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:1370',
  nativeCurrency: {
    name: 'Dorsen',
    symbol: 'RAMA',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      // http: ['https://mainnet-rpc.dorsenscan.io/'],
      http: ['https://blockchain.ramestta.com'],
    },
  },
  blockExplorers: {
    default: {
      name: 'DorsenScan Mainnet',
      url: 'https://dorsenscan.io/',
    },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xE4fA850Bd3abBC63e07E688c27eF9a334992283d',
  //     blockCreated: 7334177,
  //   },
  // },
})