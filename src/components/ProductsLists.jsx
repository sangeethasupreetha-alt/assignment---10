import React from "react";
import ProductCard from "./ProductCard";

const ProductsLists = ({ selectedCategory }) => {
const Products = [
{ 
    id: 1, 
    title: "Laptop", 
    price: 50000, 
    category: "Electronics",
    inStock: true, 
    image: "src/assets/Laptop.webp" 
},

{ 
    id: 2, 
    title: "T-Shirt", 
    price: 500, 
    category: "Clothing",
    inStock: false, 
    image: "src/assets/T-Shirt.jpg" 
},

{ 
    id: 3, 
    title: "Book", 
    price: 300, 
    category: "Books", 
    inStock: true,
    image: "src/assets/Book.jpg" 
},

{ 
    id: 4, 
    title: "Headphones", 
    price: 1200, 
    category: "Electronics",
    inStock: true, 
    image: "src/assets/Headphone image.jpg" 
},

{ 
    id: 5, 
    title: "Shoes", 
    price: 2200, 
    category: "Clothing", 
    inStock: false, 
    image: "src/assets/Shoes.jpg" 
},

{ 
    id: 6, 
    title: "Notebook", 
    price: 150, 
    category: "Books", 
    inStock: true, 
    image: "src/assets/Notebook.jpg" 
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
