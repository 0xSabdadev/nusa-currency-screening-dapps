import '@/styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
// import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import {
  RainbowKitProvider,
  getDefaultWallets,
  Locale,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { wallets } = getDefaultWallets();

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
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    sepolia  ],
  ssr: true,
});

const queryClient = new QueryClient();

export default function App({Component, pageProps}) {
    return (
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale={locale}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
    )
}
