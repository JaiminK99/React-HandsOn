import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
  { id: 3, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ far Away 🧳</h1>;
}

function Form() {
  // use of controlled elements : To keep all the state of input fields in React appliaction and not in DOM
  // Due to this react controls and owns the state of input fields
  // 3 steps

  // 1. create state for input field
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 2. Use that state on element we want to control as the value of input field

  // 3. Update state variable using onChange event and set state variale to current value of the element

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return; // Safe guard for not submitting form while desccription is empty.

    const newItem = {
      description,
      quantity,
      packed: false,
      id: new Date.now(),
    };

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

function PackingList() {
  return (
    <div className="list">
      <ul className="list">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
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
