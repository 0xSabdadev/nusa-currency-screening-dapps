import Image from 'next/image'

export default function Hero() {
    return (
        <section class='font-roboto bg-darkmain-800 '>
            <div class='grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pb-16 lg:pt-32 lg:grid-cols-12'>
                <div class='mr-auto place-self-center lg:col-span-7'>
                    <h1 class='max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white'>
                        Currency Screening Explorer
                    </h1>
                    <p class='max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-lg '>
                        Telusuri lebih dari 45.000+ mata uang kripto aktif dan bandingkan mata uang
                        kripto berdasarkan harga, kapitalisasi pasar, dan volume. Semua transaksi
                        dalam satu aplikasi berburu kripto.
                    </p>
                    <a
                        href='#'
                        class='inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bgGradient '>
                        Telusuri
                        <svg
                            class='w-5 h-5 ml-2 -mr-1'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                                clip-rule='evenodd'></path>
                        </svg>
                    </a>
                </div>
                <div class='hidden lg:mt-0 lg:col-span-5 lg:flex'>
                    <Image src='/pobox.svg' alt='mockup' width={520} height={383} />
                </div>
            </div>
        </section>
    )
}
