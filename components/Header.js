import Image from 'next/image'
import {useRouter} from 'next/router'
import {ConnectButton} from '@rainbow-me/rainbowkit'

export default function Header() {
    const router = useRouter()

    const redirectToHome = () => {
        router.push('/')
    }

    return (
        <nav className='font-roboto bg-darkmain-800 fixed w-full z-20 top-0 start-0 '>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div
                    onClick={redirectToHome}
                    className='flex items-center space-x-3 rtl:space-x-reverse cursor-pointer'>
                    <Image src='/logox.svg' alt='Logo' width={180} height={120} />
                </div>
                <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse font-roboto'>
                    <ConnectButton
                        label='Connect Wallets'
                        accountStatus={{
                            smallScreen: 'avatar',
                            largeScreen: 'full',
                        }}
                        showBalance={{
                            smallScreen: false,
                            largeScreen: true,
                        }}
                    />
                    <button
                        data-collapse-toggle='navbar-sticky'
                        type='button'
                        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
                        aria-controls='navbar-sticky'
                        aria-expanded='false'>
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 17 14'>
                            <path
                                stroke='currentColor'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M1 1h15M1 7h15M1 13h15'
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
                    id='navbar-sticky'>
                    <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium   rounded-lg bg-darkmain-800 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 0'>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-white md:p-0 hover:text-greenmain'
                                aria-current='page'>
                                Mata Uang Kripto
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='block py-2 px-3 text-white rounded hover:text-greenmain md:p-0'>
                                Bursa
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='bblock py-2 px-3 text-white rounded hover:text-greenmain md:p-0'>
                                Komunitas
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='bblock py-2 px-3 text-white rounded hover:text-greenmain md:p-0'>
                                Produk
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
