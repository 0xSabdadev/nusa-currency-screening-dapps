import {TickerContext} from '@/context/TickerContext'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useContext, useEffect} from 'react'

export default function CMCTable() {
    const router = useRouter()
    const {cryptoData} = useContext(TickerContext)

    return (
        <section className='bg-darkmain-800 dark:bg-gray-900 '>
            <div className='pt-0 pb-8 px-4 mx-auto max-w-screen-xl text-left lg:pt-12 lg:pb-16  relative'>
                <div className='flex flex-row justify-between mb-8'>
                    <h1 className='text-left  text-lg font-extrabold font-roboto tracking-tight leading-none text-greenmain md:text-2xl lg:text-3xl dark:text-white'>
                        Market Explorer
                    </h1>
                    <h1 className='text-left text-lg font-bold font-roboto tracking-tight leading-none text-white md:text-lg lg:text-1xl dark:text-white'>
                        Total Tickers : <span className='text-greenmain'></span>
                    </h1>
                </div>

                <div className='relative overflow-x-auto  sm:rounded-lg'>
                    <table className='font-roboto w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400'>
                        <thead className='text-lg text-white uppercase bg-darkmain-800 dark:bg-gray-700 dark:text-gray-400'>
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
                                        className='rounded-lg bg-darkmain-300 border-4 border-darkmain-800 dark:bg-gray-800 dark:border-gray-700 hover:bg-darkmain-500 dark:hover:bg-gray-600'>
                                        <th
                                            scope='row'
                                            className='rounded-l-xl px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white'>
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
                                                    data.price_change_percentage_1h_in_currency > 0
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
                                        className='rounded-lg bg-darkmain-300 border-4 border-darkmain-800 dark:bg-gray-800 dark:border-gray-700 hover:bg-darkmain-500 dark:hover:bg-gray-600 px-6 py-4 text-white text-center'>
                                        Invalid data format
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
