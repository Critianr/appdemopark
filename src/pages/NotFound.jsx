import React from 'react'
import Notfound from '../assets/img/404.jpg'
import '../assets/css/not.css'
export default function NotFound() {
        return (
            <div>
            <h2>Pagina No encontrada</h2>
            <div className="container-fluid not">
                
                <img src={Notfound} width="800" height="500" alt="notfound" />
            </div>
            </div>
        )
}
