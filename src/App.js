import Dropdown from "./Dropdown"; // Importing Dropdown component

// Main App component
function App() {

  // Define array of dropdown options
  const items = ["Yes", "Probably not"]; 

  return ( 
    <div style={{ padding: "50px" }}>
      <h2>Should you use a dropdown?</h2>
      <Dropdown items={items} />
    </div>
  );
  
}

export default App;
