'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'



export const QueryProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 120 * 1000,
                retry: (failureCount) => {
                    return failureCount < 2
                },
            },
        },
    }))
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

    )
}