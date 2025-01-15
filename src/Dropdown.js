import React, { useState } from "react";
import "./Dropdown.css"; // Ensure your CSS is linked

const Dropdown = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select");

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selection
  };

  // Functions to handle hover states
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Header displaying selected option */}
      <div className="dropdown-header">{selectedOption}</div>
      {/* Dropdown options */}
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
