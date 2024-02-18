import React from 'react';
import '../css/Header.css';

function Header() {
    return(
        <header>
            <h1 className='Title'>Os Tempos Do Brasil.</h1>
            <nav>
                <button className='Header-button'>Principais</button>
                <button className='Header-button'>Política</button>
                <button className='Header-button'>Ações</button>
                <button className='Header-button'>Bitcoin</button>
                <button className='Header-button'>Etherium</button>
                <button className='Header-button'>Esporte</button>
                <button className='Header-button'>Copa do Nordeste 2024</button>
                <button className='Header-button'>Paulistão 2024</button>
                <button className='Header-button'>Carioca 2024</button>
            </nav>
        </header>
    );
}

export default Header;