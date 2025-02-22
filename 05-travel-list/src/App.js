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
  return <div className="add-form">What do you need for your 😍 trip?</div>;
}

function PackingList() {
  return <div className="list">List</div>;
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
