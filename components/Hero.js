import Image from 'next/image'

export default function Hero({resultRef}) {
    const onBtnScroll = () => {
        resultRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <section className='font-roboto bg-darkmain-800 '>
            <div className='grid max-w-screen-xl px-4 pt-32 pb-16 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12'>
                <div className='mr-auto place-self-center lg:col-span-7'>
                    <h1
                        className='max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white'
                        data-aos='fade-up'
                        data-aos-delay='200'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        Currency Screening Explorer
                    </h1>
                    <p
                        className='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-lg '
                        data-aos='fade-up'
                        data-aos-delay='250'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        Telusuri lebih dari 45.000+ mata uang kripto aktif dan bandingkan mata uang
                        kripto berdasarkan harga, kapitalisasi pasar, dan volume. Semua transaksi
                        dalam satu aplikasi berburu kripto.
                    </p>
                    <div
                        onClick={onBtnScroll}
                        className='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bgGradient cursor-pointer '
                        data-aos='fade-up'
                        data-aos-delay='300'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        Telusuri
                        <svg
                            className='w-5 h-5 ml-2 -mr-1'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fillRule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clipRule='evenodd'></path>
                        </svg>
                    </div>
                </div>
                <div
                    className='hidden lg:mt-0 lg:col-span-5 lg:flex'
                    data-aos='fade-up'
                    data-aos-delay='350'
                    data-aos-duration='800'
                    data-aos-easing='ease-in-out'
                    data-aos-once='true'>
                    <Image src='/pobox.svg' alt='mockup' width={520} height={383} priority />
                </div>
            </div>
        </section>
    )
}
