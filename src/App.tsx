import 'mapbox-gl/dist/mapbox-gl.css';  // This needs to be first
import Map from 'react-map-gl';
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Bangkok Street Food Map</h1>
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 100.5018, // Bangkok coordinates
          latitude: 13.7563,
          zoom: 11
        }}
        style={{width: "100%", height: "500px"}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      />
    </div>
  )
}

export default App