import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleadditems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteitems = (id) => {
    setItems((items) => items.filter((item) => item.id != id));
  };

  const handleToggleitems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  return (
    <div className="app">
      <Logo />
      <Form onadditems={handleadditems} />
      <PackingList items={items} ondeleteitems={handleDeleteitems}
        onToggleitem={handleToggleitems}/>
      <Stats />
    </div>
  );
}



const Logo = () => {
  return <h1>🌴 Far Away 💰 </h1>;
};

const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
   if (!description) return;

    const newItem = { description, quantity, id: Date.now(), packed: false };
    console.log(newItem);

    onadditems(newItem);

    setDescription("");
    setQuantity(1);
};
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 🙋 trip?</h3>
       <select value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item ... " value={description}
        onChange={(e) => setDescription(e.target.value)} />
      <button>add</button>
    </form>
  );
};

const PackingList = ({ items, ondeleteitems, onToggleitem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            ondeleteitems={ondeleteitems}
            onToggleitem={onToggleitem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

const Item = ({ item, ondeleteitems, onToggleitem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => onToggleitem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => ondeleteitems(item.id)}>❌</button>
    </li>
  );
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>you have x items in your list and you alredy packed x(x%)</em>
    </footer>
  );
};
export default App;
