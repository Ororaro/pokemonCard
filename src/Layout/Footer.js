import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer-text " >
        <div className="text-center p-3 text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    </footer>
  )
}

export default Footer