import CMCTable from '@/components/CMCTable'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TickerProvider from '@/context/TickerContext'

export default function Home() {
    return (
        <TickerProvider>
            <div className='min-h-screen'>
                <Header />
                <Hero />
                <CMCTable />
                <Footer />
            </div>
        </TickerProvider>
    )
}
