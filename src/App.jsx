import { useState } from "react";
import Form from "./form";
import PackingList from "./PackingList";
import Item from "./item";
import Stats from "./stats";
import Logo from "./logo";

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
  const handleClearList = () => {
    const confirmed = window.confirm("are you sure that clear all items?");
    if (confirmed) setItems([]);
  };
  return (
    <div className="app">
      <Logo />
      <Form onadditems={handleadditems} />
      <PackingList items={items} ondeleteitems={handleDeleteitems}
        onToggleitem={handleToggleitems}  onClearList={handleClearList} />
      <Stats  items={items}/>
    </div>
  );
}

export default App;
