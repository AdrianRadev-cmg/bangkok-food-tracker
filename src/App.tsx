import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout/Layout'
import Header from './Components/Header/Header'
import MapComponent from './Components/Map/Map'
import FilterBar from './Components/FilterBar/FilterBar'

function App() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <Layout>
      <Header />
      <FilterBar 
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <main>
        <MapComponent activeFilter={activeFilter} />
      </main>
    </Layout>
  )
}

export default App