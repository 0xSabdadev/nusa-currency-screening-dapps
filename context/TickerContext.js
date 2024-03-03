import {createContext, useLayoutEffect, useState} from 'react'

export const TickerContext = createContext({})
export default function TickerProvider({children}) {
    const [cryptoData, setCryptoData] = useState()
    const [tickerData, setTickerData] = useState()
    const [error, setError] = useState({data: '', coinData: '', search: ''})
    const [searchData, setSearchData] = useState()
    const [coinSearch, setCoinSearch] = useState('')
    // parrams (NOTES : for further developing pagination and search-filter)
    const [currency, setCurrency] = useState('idr')
    const [sortBy, setSortBy] = useState('market_cap_desc')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(250)
    const [perPage, setPerPage] = useState(10)

    const getCryptoData = async () => {
        setError({...error, data: ''})
        setCryptoData()
        setTotalPages(13220)
        try {
            const data = await fetch(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`,
            )
                .then(async res => {
                    if (res.ok) {
                        return res.json()
                    }
                    let errorResponse = await res.json()
                    setError({...error, data: errorResponse.error})
                    throw new Error(errorResponse.error)
                })
                .then(json => json)
            setCryptoData(data)

            console.log(data)
        } catch (err) {
            console.error(err)
        }
    }

    useLayoutEffect(() => {
        getCryptoData()
    }, [])
    return <TickerContext.Provider value={{cryptoData}}>{children}</TickerContext.Provider>
}
