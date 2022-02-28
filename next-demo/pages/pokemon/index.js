/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { fetchService } from '../../uttils';

export default function PokemonTable() {
    const [state, setState] = React.useState([]);
    const [filter, setFilter] = React.useState({
        page: 0,
        loading: true
    })

    React.useEffect(async () => {
        let data = [].concat(state);
        let response = await fetchService('https://pokeapi.co/api/v2/pokemon?limit=100&offset=' + filter.page + 100, { method: 'GET' })
        data = [...data, ...response.results]
        setState(data)
        if (response) {
            setFilter((e) => ({ ...e, loading: false }))
        }
    }, [filter.page])

    React.useEffect(() => {
        let doc = document.getElementById("scroll_bar")
        doc.addEventListener("scroll", e => onLoadData(e.target))
        return () => doc.removeEventListener("scroll", e => onLoadData(e.target))
    }, [])

    const onLoadData = (e) => {
        if ((e.scrollTop + e.clientHeight + 50) >= e.scrollHeight) {
            e.style.transition = 'all 2s ease';
            setFilter(els => {
                if (!els.loading) {
                    let page = els.page + 1
                    return { ...els, page }
                }
                return els
            })
        }
    }
    return (
        <div className='pokemon pokemon-list' id='scroll_bar'>
            {state?.length > 0 ? state.map((item, index) => {
                let id = item.url.split("/")[6]
                return (
                    <Link href={"/pokemon/" + id} key={index}>
                        <div className='pokemon-wrap'>
                            <div className='img'>
                                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + id + ".png"} />
                            </div>
                            <div>
                                <p className='title'> {item.name}</p>
                            </div>
                        </div>
                    </Link>
                )
            }) : ""}
        </div>
    )
}
