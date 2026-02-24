const Header = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">E-Commerce Dashboard</h1>
  
<select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
  className="border px-3 py-2 rounded ml-4"
>
  <option value="All">All</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothing">Clothing</option>
  <option value="Books">Books</option>
</select>
  </header>
 );
};

export default Header;