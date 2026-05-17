import { defineChain } from "@reown/appkit/networks";



export const dorsenTestnet = defineChain({
  id: 99119,
  name: 'Dorsen Testnet',
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:99119',
  nativeCurrency: {
    name: 'Dorsen',
    symbol: 'tDC',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.dorsenscan.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'DorsenScan Testnet',
      url: 'https://testnet.dorsenscan.io/',
    },
  },
  testnet: true,
})