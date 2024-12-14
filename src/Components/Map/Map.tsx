import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';
import './Map.css';
import { foodSpots } from './data';

function MapComponent({ activeFilter }: { activeFilter: string | null }) {
  const filteredSpots = activeFilter 
    ? foodSpots.filter(spot => spot.type === activeFilter)
    : foodSpots;

  const copyLocation = (coordinates: number[]) => {
    navigator.clipboard.writeText(`${coordinates[1]}, ${coordinates[0]}`);
  };

  return (
    <div className="map-wrapper">
      <Map
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 100.5018,
          latitude: 13.7563,
          zoom: 11
        }}
        style={{width: "100%", height: "100%"}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
      >
        {filteredSpots.map((spot) => (
          <Marker 
            key={spot.id}
            longitude={spot.coordinates[0]}
            latitude={spot.coordinates[1]}
          >
            <div className="marker">
              <div className="marker-name">{spot.name}</div>
              <div className="marker-price">{spot.price}</div>
              <button 
                className="copy-location"
                onClick={() => copyLocation(spot.coordinates)}
                title="Copy location"
              >
                <span className="material-symbols-outlined">
                  content_copy
                </span>
              </button>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default MapComponent