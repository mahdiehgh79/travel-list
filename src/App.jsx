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
      <Stats  items={items}/>
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
  const [sortBy, setSortBy] = useState("input");

  let sorteditems;

  if (sortBy === "input") sorteditems = items;
  if (sortBy === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            ondeleteitems={ondeleteitems}
            onToggleitem={onToggleitem}
            key={item.id}
          />
        ))}
      </ul>
       <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sot by input order</option>
          <option value="description">sot by description</option>
          <option value="packed">sot by packed status</option>
        </select>
      </div>
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

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em> put something here for trip ... 🚀 </em>
      </p>
    );
  }
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const perecentage = Math.round((numpacked / numitems) * 100);

  return (
    <footer className="stats">
      <em>
        {perecentage === 100
          ? "you are ready to go to trip"
          : `you have ${numitems} items in your list and you alredy packed ${numpacked}
        (${perecentage}%)`}
      </em>
    </footer>
  );
};
export default App;
