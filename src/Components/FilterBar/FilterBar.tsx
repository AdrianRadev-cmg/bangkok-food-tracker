import './FilterBar.css';
import { foodTypes } from '../Map/data';

interface FilterBarProps {
  activeFilter: string | null;
  onFilterChange: (type: string | null) => void;
}

// Add an icon mapping object
const foodIcons: { [key: string]: string } = {
  noodles: '🍜',
  dessert: '🍨',
  salad: '🥗',
  rice: '🍚',
  soup: '🥣'
};

function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="filter-bar">
      {foodTypes.map((type) => (
        <button 
          key={type.id} 
          className={`filter-item ${activeFilter === type.id ? 'active' : ''}`}
          onClick={() => onFilterChange(activeFilter === type.id ? null : type.id)}
        >
          <div className="filter-icon">
            {foodIcons[type.id] || '🍜'} {/* Use specific icon or fallback */}
          </div>
          <span>{type.label}</span>
        </button>
      ))}
    </div>
  );
}

export default FilterBar;