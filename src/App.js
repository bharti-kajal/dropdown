import Dropdown from "./Dropdown";

function App() {

  const items = ["Yes", "Probably not"];

  return (
    <div style={{ padding: "50px" }}>
      <h2>Should you use a dropdown?</h2>
      <Dropdown items={items} />
    </div>
  );
  
}

export default App;
