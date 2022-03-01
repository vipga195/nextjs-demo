/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Image from '@/components/Image'
import { fetchService } from '@/utils/services'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const PokemonDetail = () => {
    const router = useRouter()
    const { id } = router.query

    const [loading, setLoading] = React.useState(true)
    const [state, setState] = React.useState()
    React.useEffect(async () => {
        let response = await fetchService('https://pokeapi.co/api/v2/pokemon/' + id, { method: 'GET' })
        let des = await fetchService('https://pokeapi.co/api/v2/ability/' + id, { method: 'GET' })
        setState({ ...response, ...des })
        setTimeout(() => {
            setLoading(false)
        }, 200);
    }, [id])
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
                        <p>Description: <label>{state?.effect_entries[0]?.effect}</label></p>
                    </div>
                </div>}
        </div >
    )
}
export default PokemonDetail