/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from '@/components/Image'
import { trimContent } from '@/utils/functions'
import { fetchService } from '@/utils/services'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const PokemonDetail = () => {
    const router = useRouter()
    const { id } = router.query

    const [loading, setLoading] = React.useState(true)
    const [readMore, setReadMore] = React.useState(true)
    const [state, setState] = React.useState()
    React.useEffect(async () => {
        let response = await fetchService('https://pokeapi.co/api/v2/pokemon/' + id, { method: 'GET' })
        let des = await fetchService('https://pokeapi.co/api/v2/ability/' + id, { method: 'GET' })
        if (des?.sprites?.back_default?.length <= 300) {
            setReadMore(false)
        }
        setState({ ...response, ...des })
        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [id])

    const renderDescripstion = (text) => {
        return text?.length > 300 ? <>
            {readMore ? trimContent(text, 300, true) : text}
            <div className='hover' onClick={() => setReadMore(!readMore)}>{readMore ? "Read more" : "Close"}</div>
        </> : text
    }
    return (
        <div className='pokemon pokemon-detail'>
            {loading ? <div className='loading'>
                <div className='loading-item'></div>
            </div> :
                <div className='pokemon-wrap'>
                    <figure>
                        <Image layout='responsive' width={100} height={100} src={state?.sprites.back_default} alt="pokemon" />
                    </figure>
                    <div className='des'>
                        <div className='title'>
                            <span>{state?.name}</span>
                        </div>
                        <span className='text'> <label>Description: </label>{renderDescripstion(state?.effect_entries[0]?.effect)}</span>
                    </div>
                </div>}
        </div >
    )
}
export default PokemonDetail