import React from 'react'
import '../css/MainCard.css'

function MainCard({title, description, imgUrl, category}) {
    return(
        <div className='Card'>
            <img src={imgUrl} alt={title}/>
            <div>
                <button className='Card-button'>{category}</button>
                <h2 className='Card-title'>{title}</h2>
                <p className='Card-description'>{description}</p>
            </div>
        </div>
    );
}

export default MainCard;