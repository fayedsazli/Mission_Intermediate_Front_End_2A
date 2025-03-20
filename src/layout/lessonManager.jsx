import { useState } from "react";
import jsonData from "./data.json"; // Import JSON


export default function CrudApp() {
  // State untuk menyimpan data JSON
  const [items, setItems] = useState(jsonData);
  const [newItem, setNewItem] = useState("");
  const [editId, setEditId] = useState(null);

  // Tambah Item
  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { id: Date.now(), name: newItem }]);
    setNewItem("");
  };

  // Edit Item
  const editItem = (id) => {
    const item = items.find((item) => item.id === id);
    setNewItem(item.name);
    setEditId(id);
  };

  // Update Item
  const updateItem = () => {
    setItems(items.map((item) => (item.id === editId ? { ...item, name: newItem } : item)));
    setNewItem("");
    setEditId(null);
  };

  // Hapus Item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>CRUD JSON dengan State Management</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      {editId ? (
        <button onClick={updateItem}>Update</button>
      ) : (
        <button onClick={addItem}>Tambah</button>
      )}

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => editItem(item.id)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
