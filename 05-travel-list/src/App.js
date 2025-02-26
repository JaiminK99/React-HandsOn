import { useState } from "react";

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  // use of controlled elements : To keep all the state of input fields in React appliaction and not in DOM
  // Due to this react controls and owns the state of input fields
  // 3 steps

  // 1. create state for input field
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Items are rendered by packing list, item state need to be in packing list component
  // How to get state from packing list
  // We cannot pass it as prop in packing list,because form is sibling component of packing list. But data can only flow down the tree, It can't flow up or sideways

  //Need to use technique called lift up the state -> taking declared state line to closest common parent component which is App componenet
  // const [item, setItem] = useState([]);

  // 2. Use that state on element we want to control as the value of input field

  // 3. Update state variable using onChange event and set state variale to current value of the element

  // Part of "Lifting up state"
  // const handleAddItems = (item) => {
  //   setItems((items) => [...items, item]);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return; // Safe guard for not submitting form while desccription is empty.

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      What do you need for your 😍 trip?
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({ items, onDeleteItems, onToggleItem }) {
  return (
    <div className="list">
      <ul className="list">
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        💼 ✈️ 🚀 You have X items on your list, and you already packed X (X%).
      </em>
    </footer>
  );
}
