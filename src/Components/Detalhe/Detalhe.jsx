import React, { useState } from 'react';
import './Detalhe.css';
import Sneakers from "../../assets/Carrossel/Sneakers.png"

function Detalhe() {
    const [selectedSize] = useState(41);
    const [selectedColor] = useState('red');
    
    return (
        <>
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
                    <div className='details'>
                        <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
                        <p className='category'>Casual | Nike | REF: 38416711</p>
                        <div className='rating'>
                            <span className='stars'>⭐⭐⭐⭐⭐</span>
                            <span className='rating-value'>4.7</span>
                            <span className='reviews'>(90 avaliações)</span>
                        </div>
                        <div className='price'>
                            <span className='current-price'>R$ 219,00</span>
                            <span className='original-price'>219,00</span>
                        </div>
                        <div className='description'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            </p>
                        </div>
                        <div className='sizes'>
                            <h2>Tamanhos</h2>
                            <div className='size-options'>
                                {[39, 40, 41, 42, 43].map(size => (
                                    <button
                                        key={size}
                                        className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='colors'>
                            <h2>Cor</h2>
                            <div className='color-options'>
                                {['blue', 'red', 'black', 'grey', 'purple'].map(color => (
                                    <button
                                        key={color}
                                        className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                        <button className='buy-button'>COMPRAR</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Detalhe;
