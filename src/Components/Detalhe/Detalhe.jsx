import React, { useState } from 'react';
import './Detalhe.css';
import Sneakers from "../../assets/Carrossel/Sneakers.png"
import Img1 from "../../assets/Carrossel/image1.png"
import Img2 from "../../assets/Carrossel/image2.png"
import Img3 from "../../assets/Carrossel/image3.png"
import Img4 from "../../assets/Carrossel/image4.png"
import Img5 from "../../assets/Carrossel/image5.png"

export const Detalhe = () => {
    const [selectedSize] = useState(41);
    const [selectedColor] = useState('red');
    return (
        <div className='container'>
            <nav className='breadcrumb'>
                <a href="#">Home</a> / <a href="#">Produtos</a> / <a href="#">Tênis</a> / <a href="#">Nike</a> / Tênis Nike Revolution 6 Next Nature Masculino
            </nav>
            <div className='product'>
                <div className='image-gallery'>
                    <img src={Sneakers} alt="Tênis Nike Revolution 6 Next Nature Masculino" className='main-image' />
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
                            {['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'].map(color => (
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
            <div className="thumbnails">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                    <img src={Img1} alt=""/>
                    <img src={Img2} alt=""/>
                    <img src={Img3} alt=""/>
                    <img src={Img4} alt=""/>
                    <img src={Img5} alt=""/>
                </div>
        </div>
    );
};
