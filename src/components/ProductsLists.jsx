import React from "react";
import ProductCard from "./ProductCard";

import Laptop from "../assets/Laptop.webp";
import TShirt from "../assets/TShirt.jpg";
import Book from "../assets/Book.jpg";
import Headphone from "../assets/Headphone.jpg";
import Shoes from "../assets/Shoes.jpg";
import Notebook from "../assets/Notebook.jpg";

const ProductsLists = ({ selectedCategory }) => {
const Products = [
{ 
    id: 1, 
    title: "Laptop", 
    price: 50000, 
    category: "Electronics",
    inStock: true, 
    image: Laptop
},

{ 
    id: 2, 
    title: "TShirt", 
    price: 500, 
    category: "Clothing",
    inStock: false, 
    image: TShirt
},

{ 
    id: 3, 
    title: "Book", 
    price: 300, 
    category: "Books", 
    inStock: true,
    image: Book
},

{ 
    id: 4, 
    title: "Headphones", 
    price: 1200, 
    category: "Electronics",
    inStock: true, 
    image: Headphone
},

{ 
    id: 5, 
    title: "Shoes", 
    price: 2200, 
    category: "Clothing", 
    inStock: false, 
    image: Shoes 
},

{ 
    id: 6, 
    title: "Notebook", 
    price: 150, 
    category: "Books", 
    inStock: true, 
    image: Notebook
},
];

const filteredProducts = selectedCategory === "All" ? Products : Products.filter(
                    (product) => product.category === selectedCategory
                );
return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg gap-6">
             
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} Product={product} />
            ))}
            
        </div>
    </div>
);
};

export default ProductsLists;
