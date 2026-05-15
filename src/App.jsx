import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    try {
      const encodedQuery = encodeURIComponent(query)
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodedQuery}&json=1`
      
      const response = await fetch(url)
      const data = await response.json()
      
      // Filter out products without a product_name
      const filteredProducts = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ''
      )
      
      setResults(filteredProducts)
    } catch (error) {
      console.error('Error fetching food data:', error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>FoodFacts</h1>
        <p className="tagline">Search for real nutrition data</p>
      </header>
      <main className="main">
        <SearchBar onSearch={handleSearch} />
        
        {loading && <div className="loading">Loading...</div>}
        
        {!loading && results.length === 0 && (
          <div className="empty-state">
            <p>Search for a food to see nutrition information</p>
          </div>
        )}
        
        {!loading && results.length > 0 && <FoodList products={results} />}
        
        {!loading && results.length === 0 && (
          <div className="no-results">
            <p>No results found. Try a different search.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
