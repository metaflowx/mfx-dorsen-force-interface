import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { AppKitNetwork, bsc, bscTestnet, polygonAmoy } from '@reown/appkit/networks'
import { dorsenTestnet } from './chains/dorsenTestnet'
import { dorsenMainnet } from './chains/dorsenMainnet'

/// Get projectId from https://cloud.reown.com
/// export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID


if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [dorsenMainnet] as [AppKitNetwork, ...AppKitNetwork[]]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks,
  transports: {
    [dorsenMainnet.id]: http(dorsenMainnet.rpcUrls.default.http[0])
  },
})

export const config = wagmiAdapter.wagmiConfig
