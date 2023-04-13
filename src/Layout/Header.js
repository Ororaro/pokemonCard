import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
const Header = () => {
    return (
        < div className="container-lg" >
            <div className='d-flex flex-row d-flex justify-content-center mt-5 d-flex align-items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' width="20%" />
                <h1 className="display-3 pt-3" style={{ fontWeight: '700', paddingLeft: '2rem' }}>Pokedex App</h1>
            </div>
           
        </div>
    )
}

export default Header