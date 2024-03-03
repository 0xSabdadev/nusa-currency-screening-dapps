import CMCTable from '@/components/CMCTable'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TickerProvider from '@/context/TickerContext'
import {useRef} from 'react'

export default function Home() {
    const resultRef = useRef(null)
    return (
        <TickerProvider>
            <div className='min-h-screen'>
                <Header />
                <Hero resultRef={resultRef} />
                <CMCTable ref={resultRef} />
                <Footer />
            </div>
        </TickerProvider>
    )
}
