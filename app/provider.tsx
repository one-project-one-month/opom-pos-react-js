'use client'

import React from 'react'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

export default function Providers({children}: {children : React.ReactNode}) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </Provider>
    )
}
