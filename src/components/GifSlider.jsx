import React, { useState, useEffect } from 'react';
import imgPrueba from '../imagenes/generales/donut.png';
import './GifSlider.css';

export default function GifSlider() {
    const [images, setImages] = useState(Array(10).fill(imgPrueba));

    return (
        <div className="slider">
            <div className="slide-track">
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} height="100" width="250" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}