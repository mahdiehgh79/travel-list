const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sos", quantity: 12, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e);
};

const Logo = () => {
  return <h1>🌴 Far Away 💰 </h1>;
};

const Form = () => {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 🙋 trip?</h3>
       <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item ... " />
      <button>add</button>
    </form>
  );
};

const PackingList = () => {
  return(
  <div className="list">
    <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
     </ul>
  </div>;
  )
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
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
