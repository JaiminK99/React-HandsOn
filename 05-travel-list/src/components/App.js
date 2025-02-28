import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
// import { PackingList } from "./PackingList"; // Named import
import PackingList from "./PackingList"; // Default import
import Stats from "./Stats";

export default function App() {
  // Lifting up the state
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onHandleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
