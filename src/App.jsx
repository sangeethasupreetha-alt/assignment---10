import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsLists from "./components/ProductsLists";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <ProductsLists selectedCategory={selectedCategory} />
      <Footer />
    </div>
      
  );
}

export default App;