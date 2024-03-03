import {TickerContext} from '@/context/TickerContext'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useContext, useEffect} from 'react'
import {forwardRef} from 'react'

export default forwardRef(function CMCTable(props, ref) {
    const router = useRouter()
    const {cryptoData} = useContext(TickerContext)

    return (
        <section className='bg-darkmain-800 ' ref={ref}>
            <div className='pt-0 pb-8 px-4 mx-auto max-w-screen-xl text-left lg:pt-12 lg:pb-16  relative'>
                <div className='flex flex-row justify-between mb-8'>
                    <h1
                        className='text-left  text-lg font-extrabold font-roboto tracking-tight leading-none text-greenmain md:text-2xl lg:text-3xl '
                        data-aos='fade-up'
                        data-aos-delay='400'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        Market Explorer
                    </h1>
                    <h1
                        className='text-left text-lg font-bold font-roboto tracking-tight leading-none text-white md:text-lg lg:text-1xl '
                        data-aos='fade-up'
                        data-aos-delay='450'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        Total Tickers : {cryptoData ? cryptoData.length : '0'}
                        <span className='text-greenmain'></span>
                    </h1>
                </div>

                <div className='relative overflow-x-auto  sm:rounded-lg'>
                    <table
                        className='font-roboto w-full text-sm text-center rtl:text-right text-gray-500 '
                        data-aos='fade-up'
                        data-aos-delay='550'
                        data-aos-duration='800'
                        data-aos-easing='ease-in-out'
                        data-aos-once='true'>
                        <thead className='text-lg text-white uppercase bg-darkmain-800 '>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    Aset
                                </th>

                                <th scope='col' className='px-6 py-3 text-left'>
                                    Nama
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Harga
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Total Volume
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    Kapitalisasi Pasar
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    1J%
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    24J%
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    7H%
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cryptoData ? (
                                cryptoData.map(data => (
                                    <tr
                                        key={data.id}
                                        className='rounded-lg bg-darkmain-300 border-4 border-darkmain-800 hover:bg-darkmain-500 '>
                                        <th
                                            scope='row'
                                            className='rounded-l-xl px-6 py-4 font-medium text-white whitespace-nowrap '>
                                            <img
                                                className='w-[1.2rem] h-[1.2rem] mx-1.5'
                                                src={data.image}
                                                alt={data.name}
                                            />
                                            <span>
                                                {/* <Link to={`/${data.id}`} className='cursor-pointer'>
                                                    {data.symbol}
                                                </Link> */}
                                            </span>
                                        </th>
                                        <td className='px-6 py-4 text-white text-left'>
                                            {/* <Link to={`/${data.id}`} className='cursor-pointer'>
                                                    {data.name}
                                                </Link> */}
                                            {data.name}
                                        </td>
                                        <td className='px-6 py-4 text-white'>
                                            <span className='bg-greendark text-greenmain rounded-full  px-3 py-2'>
                                                {new Intl.NumberFormat('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                }).format(data.current_price)}
                                            </span>
                                        </td>
                                        <td className='px-6 py-4 text-white'>
                                            <span className='bg-greendark text-greenmain rounded-full  px-3 py-2'>
                                                {new Intl.NumberFormat('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR',
                                                }).format(data.total_volume)}
                                            </span>
                                        </td>
                                        <td className='py-4'>
                                            <span
                                                className={
                                                    data.market_cap_change_percentage_24h > 0
                                                        ? 'bg-greendark text-greenmain rounded-full  px-3 py-2 '
                                                        : 'bg-reddark text-redfalcon rounded-full  px-3 py-2'
                                                }>
                                                {Number(
                                                    data.market_cap_change_percentage_24h,
                                                ).toFixed(2)}
                                                %
                                            </span>
                                        </td>
                                        <td
                                            className={
                                                data.price_change_percentage_1h_in_currency > 0
                                                    ? 'text-greenmain py-4 lg:table-cell hidden '
                                                    : 'text-redfalcon py-4  lg:table-cell hidden'
                                            }>
                                            <i
                                                class={`fa-solid fa-caret-up mr-1 text-sm ${
                                                    data.price_change_percentage_1h_in_currency > 0
                                                        ? ''
                                                        : 'hidden'
                                                }`}></i>
                                            {Number(
                                                data.price_change_percentage_1h_in_currency,
                                            ).toFixed(2)}
                                        </td>
                                        <td
                                            className={
                                                data.price_change_percentage_24h_in_currency > 0
                                                    ? 'text-greenmain py-4 lg:table-cell hidden'
                                                    : 'text-redfalcon py-4  lg:table-cell hidden'
                                            }>
                                            <i
                                                class={`fa-solid fa-caret-up mr-1 text-sm ${
                                                    data.price_change_percentage_24h_in_currency > 0
                                                        ? ''
                                                        : 'hidden'
                                                }`}></i>
                                            {Number(
                                                data.price_change_percentage_24h_in_currency,
                                            ).toFixed(2)}
                                        </td>
                                        <td
                                            className={
                                                data.price_change_percentage_7d_in_currency > 0
                                                    ? 'text-greenmain py-4 lg:table-cell hidden'
                                                    : 'text-redfalcon py-4  lg:table-cell hidden'
                                            }>
                                            <i
                                                class={`fa-solid fa-caret-up mr-1 text-sm ${
                                                    data.price_change_percentage_7d_in_currency > 0
                                                        ? ''
                                                        : 'hidden'
                                                }`}></i>
                                            {Number(
                                                data.price_change_percentage_7d_in_currency,
                                            ).toFixed(2)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan='8'
                                        className='rounded-lg bg-darkmain-300 border-4 border-darkmain-800 hover:bg-darkmain-500 px-6 py-4 text-white text-center'>
                                        <svg
                                            aria-hidden='true'
                                            role='status'
                                            class='inline w-4 h-4 me-3 text-white animate-spin'
                                            viewBox='0 0 100 101'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                                                fill='#E5E7EB'
                                            />
                                            <path
                                                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                                                fill='currentColor'
                                            />
                                        </svg>
                                        Menunggu Data ...
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
})
