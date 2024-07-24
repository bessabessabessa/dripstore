import React, {useState} from 'react';
import './Detalhe.css';
import Sneakers from "../../assets/Carrossel/Sneakers.png"

export const Detalhe = () => {
    const [selectedSize] = useState(41);
    const [selectedColor] = useState('red');
    return(
        <div className='container'>
            <nav className='breadcrumb'>
            <a href="#">Home</a> / <a href="#">Produtos</a> / <a href="#">Tênis</a> / <a href="#">Nike</a> / Tênis Nike Revolution 6 Next Nature Masculino
            </nav>
            <div className='product'>
                <div className='image-gallery'>
                <img src={Sneakers} alt="Tênis Nike Revolution 6 Next Nature Masculino" className='main-image' />
                </div>
                <div className="thumbnails">
                    
                </div>
            </div>
            <div className='details'>
                <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                <p className='category'>Casual | Nike | REF: 38416711</p>
            </div>
            <div className='rating'>
                <span className='stars'>⭐⭐⭐⭐⭐</span>
                <span className='rating-value'>4.7</span>
                <span className='reviews'>(90 avaliações)</span>
            </div>
            <div className='price'>
                <span className='current-price'>R$ 219,00</span>
                <span className='original-price'>219,00</span>
            </div>
            <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    </p>




        </div>

    )
}
