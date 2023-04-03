import React from 'react'

const BootstrapNavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/preco">Preço</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sobre">Sobre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default BootstrapNavBar
