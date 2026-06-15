'use client'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'
import { networks, projectId, wagmiAdapter } from '../configs'


// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
    name: 'Dorsen Force',
    description: 'Dorsen Force',
    url: 'https://dorsenforce.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}


// Create the modal
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks,
    defaultNetwork: networks[0],
    metadata: metadata,
    features: {
        analytics: true, // Optional - defaults to your Cloud configuration
        swaps: false,
        socials: false,
        email: false,
        onramp: false,
    },
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider