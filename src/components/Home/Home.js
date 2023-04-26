import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { Col, Row } from 'react-bootstrap'
const APIFectching = () => {
    const [pokename, setPokeName] = useState([])
    const [dataFilter] = useState(["name"])
    const [word, setWord] = useState("")
    const showPokemon = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        const createPokemon = (result) => {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setPokeName(currentList => [...currentList, data])
            })
        }
        createPokemon(data.results)
    }
    useEffect(() => {
        showPokemon()
    }, [])
    const SearchPokedex = (pokename) => {
        return pokename.filter((item) => {
            return dataFilter.some((filter) => {
                if (item[filter]) {
                    return item[filter].toString().toLowerCase().indexOf(word.toLowerCase()) > -1
                }
            })
        })
    }
    return (
        <div class="container-lg ">
            <Row className='mt-5'>
                <h1 style={{fontWeight:700}}>Search</h1>
                <div >
                    <div class="form-outline ">
                        <input
                            type="search"
                            class="form-control border border-warning"
                            placeholder='Search PokemonName'
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                    </div>
                </div>
                {SearchPokedex(pokename).map((data) => {
                    return <Col className='mt-3'><PokemonCard data={data} /></Col>
                })}
            </Row>
        </div>
    )
}
export default APIFectching