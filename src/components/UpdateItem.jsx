import  { useState, useEffect } from "react";
import axios from "axios";

const UpdateItem = ({ itemId, API_URI }) => {
  const [item, setItem] = useState({});
  const [updatedValue, setUpdatedValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`${API_URI}/${itemId}`);
        setItem(response.data);  
        setUpdatedValue(response.data.name);  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching item:", error);
        setLoading(false);
      }
    };
    fetchItem();
  }, [API_URI, itemId]);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URI}/${itemId}`, {
        name: updatedValue,  
      });

      setItem(response.data);  
      setMessage("Item updated successfully!");
    } catch (error) {
      console.error("Error updating item:", error);
      setMessage("Failed to update item.");
    }
  };

  if (loading) return <p>Loading item data...</p>;

  return (
    <div>
      <h2>Update Item</h2>
      <p>Original Value: {item.name}</p>

      <input
        type="text"
        value={updatedValue}
        onChange={(e) => setUpdatedValue(e.target.value)}
        placeholder="Enter updated value"
      />

      <button onClick={handleUpdate}>Update Item</button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateItem;
