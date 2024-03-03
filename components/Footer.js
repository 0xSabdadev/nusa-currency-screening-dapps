import Image from 'next/image'

export default function Footer() {
    return (
        <footer className='bg-darkmain-800 '>
            <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <div
                        className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'
                        data-aos='fade-up'
                        data-aos-delay='650'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        <Image
                            src='/logox.svg'
                            width={128}
                            height={32}
                            className='h-8'
                            alt=' Logo'
                        />
                    </div>
                    <ul className='flex flex-wrap items-center font-roboto mb-6 text-sm font-medium text-white sm:mb-0'>
                        <li
                            data-aos='fade-up'
                            data-aos-delay='750'
                            data-aos-duration='800'
                            data-aos-easing='ease-in-out'
                            data-aos-once='true'>
                            <a href='#' className='hover:underline me-4 md:me-6'>
                                Tentang
                            </a>
                        </li>
                        <li
                            data-aos='fade-up'
                            data-aos-delay='800'
                            data-aos-duration='800'
                            data-aos-easing='ease-in-out'
                            data-aos-once='true'>
                            <a href='#' className='hover:underline me-4 md:me-6'>
                                Privacy Policy
                            </a>
                        </li>
                        <li
                            data-aos='fade-up'
                            data-aos-delay='850'
                            data-aos-duration='800'
                            data-aos-easing='ease-in-out'
                            data-aos-once='true'>
                            <a href='#' className='hover:underline me-4 md:me-6'>
                                Licensing
                            </a>
                        </li>
                        <li
                            data-aos='fade-up'
                            data-aos-delay='900'
                            data-aos-duration='800'
                            data-aos-easing='ease-in-out'
                            data-aos-once='true'>
                            <a href='#' className='hover:underline'>
                                Kontak
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 sm:mx-auto border-greenmain  lg:my-8' />
                <span className='block text-sm text-greenmain sm:text-center '>
                    © 2024{' '}
                    <a href='#' className='hover:underline'>
                        nusa MarketCap
                    </a>
                    . By Jason AlHilal.
                </span>
            </div>
        </footer>
    )
}
