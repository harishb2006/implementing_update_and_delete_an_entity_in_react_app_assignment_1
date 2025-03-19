
import UpdateItem from "./components/UpdateItem";


const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  
  const itemId = 1; 

  return (
    <div>
      <UpdateItem itemId={itemId} API_URI={API_URI} />
    </div>
  );
}

export default App;
