import React from 'react'
import './PokemonCard.css'
import { createContext, useState } from "react"
export const ThemeContext = createContext()
const PokemonCard = ({ data}) => {
    return (
        <>
            <div className='card mt-3 border border-success' style={{ height: '500px', width: '300px', margin: '0 auto' }}>
                <img className={`${data.types[0].type.name}`} src={data.sprites.other.dream_world.front_default} style={{ padding: '50px', height: '100%', width: '100%', borderBottom: '1px solid green' }} />
                <div className='card-body' >
                    <h5 className='card-title text-center'>Name: {data.forms[0].name}</h5>
                    <p className='card-text '>Stat: {data.stats[0].base_stat}</p>
                    <p className='card-text '>Type: {data.types[0].type.name}</p>
                </div>
            </div>
        </>
    )
}

export default PokemonCard