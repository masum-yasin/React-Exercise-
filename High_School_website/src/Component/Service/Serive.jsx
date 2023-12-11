import React, { useState, useEffect } from 'react';

const Service = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/productsall')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>All Of service Here</h1>
            {/* Render your data here, for example: */}
            {product.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};

export default Service;
