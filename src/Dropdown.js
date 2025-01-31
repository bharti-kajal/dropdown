import { useState } from "react"; // Import hook from Reac
import "./Dropdown.css"; // Import dropdown style

// Dropdown component
const Dropdown = ({ items }) => { 

  // Set state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select"); 

  // Function - handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  // Function - open dropdown on mouse hover
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  // Function - close dropdown on mouse leave
  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "open" : ""}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Display selected option */}
      <div className="dropdown-header">{selectedOption}</div>
      
      {/* Render dropdown list only if isOpen is true */}
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => ( 
            <li
              key={index} 
              onClick={() => handleOptionSelect(item)}
              className="dropdown-item"
            >
              {item} 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
