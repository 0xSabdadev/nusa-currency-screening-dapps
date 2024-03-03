import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
// import type { AppProps } from 'next/app';
import {useRouter} from 'next/router'
import {useEffect} from 'react'
import {initFlowbite} from 'flowbite'
import {
    RainbowKitProvider,
    getDefaultWallets,
    Locale,
    getDefaultConfig,
    darkTheme,
} from '@rainbow-me/rainbowkit'
import {argentWallet, trustWallet, ledgerWallet} from '@rainbow-me/rainbowkit/wallets'
import {WagmiProvider} from 'wagmi'
import {arbitrum, base, mainnet, optimism, polygon, sepolia, zora} from 'wagmi/chains'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const {wallets} = getDefaultWallets()

const config = getDefaultConfig({
    appName: 'nusa-currency-screening-dapps',
    projectId: '01',
    wallets: [
        ...wallets,
        {
            groupName: 'Other',
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
    ssr: true,
})

const queryClient = new QueryClient()

export default function App({Component, pageProps}) {
    const router = useRouter()
    const locale = router && router.locale ? router.locale : null
    useEffect(() => {
        initFlowbite()
    })
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    locale={locale}
                    theme={darkTheme({
                        accentColor: '#16FF80',
                        accentColorForeground: 'black',
                        borderRadius: 'small',
                        fontStack: 'system',
                        overlayBlur: 'small',
                    })}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
