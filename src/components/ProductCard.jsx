import React from 'react';

const ProductCard = ({ Product }) => {

    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300 text-center p-4">
            <div className="bg-gray-100 w-full h-60 flex items-center justify-center gap-2 rounded-t-xl">
                <img src={Product.image} alt={Product.title} className="h-full object-contain"/>
            </div>
            <h2 className="text-lg font-semibold mt-2">{Product.title}</h2>
            <p className="text-gray-700 mb-2">Price: ${Product.price}</p>
            <p className="text-gray-700 mb-2">Category: {Product.category}</p>
            <p className={`text-sm ${Product.inStock ? 'text-green-500' : 'text-red-500'}`}>
                {Product.price > 1000 && (<span className="bg-yellow-400 text-xs px-2 py-1 rounded-full">Expensive</span>)}
                {Product.inStock ? 'In Stock' : 'Out of Stock'}
            </p>

            <button  
            disabled={!Product.inStock}
            className={`mt-4 w-full py-2 rounded-lg font-semibold transition ${Product.inStock ? "bg-blue-600 text-white hover:bg-blue-700": "bg-gray-300 text-blue-600 cursor-not-allowed"}`}>
            
                {Product.inStock ? "Add to Cart" : "unavailable"}
            </button>

        </div>
    );
};

export default ProductCard;
