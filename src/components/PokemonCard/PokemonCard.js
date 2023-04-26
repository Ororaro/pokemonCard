import React from 'react'
import './PokemonCard.css'
import { createContext, useState } from "react"
const PokemonCard = ({ data }) => {
    return (
        <>
            <div className='card mt-4 border border-success ' style={{ position: 'relative', height: '100%', width: '300px', margin: '0 auto' }}>
                <img className={`${data.types[0].type.name}`} src={data.sprites.other.dream_world.front_default} style={{ padding: '50px', height: '100%', width: '100%', borderBottom: '1px solid green' }} />
                <h5 className='bg-dark rounded-pill p-2' style={{ position: 'absolute', top: '10px', right: '10px', color: 'white' }}>00{data.id}</h5>
                <div className='card-body bg-secondary bg-opacity-10'  >
                    <div className='row mb-3'>
                        <h5 className='card-title text-left col'>{data.forms[0].name}</h5>
                        <p className='card-text col-4 rounded-pill bg-dark text-center text-white d-flex align-items-center justify-content-center'>{data.types[0].type.name}</p>
                    </div>
                    <div className='d-flex justify-content-between border-top border-dark'>
                        <p className='card-text '>HP: </p>
                        <p className='bg-text-stat'>{data.stats[0].base_stat}</p>
                    </div>
                    <div className='d-flex justify-content-between '>
                        <p className='card-text  '>ATTACK: </p>
                        <p className='bg-text-stat'>{data.stats[1].base_stat}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='card-text  '>DEFENSE: </p>
                        <p className='bg-text-stat'>{data.stats[2].base_stat}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='card-text  '>SPECIAL - ATTACK: </p>
                        <p className='bg-text-stat'>{data.stats[3].base_stat}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='card-text  '>SPECIAL - DEFENSE: </p>
                        <p className='bg-text-stat'>{data.stats[4].base_stat}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='card-text  '>SPEED: </p>
                        <p className='bg-text-stat'>{data.stats[5].base_stat}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard