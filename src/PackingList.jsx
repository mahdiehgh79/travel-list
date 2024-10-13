import { useState } from "react";
import Item from "./item";

const PackingList = ({ items, ondeleteitems, onToggleitem, onClearList }) => {
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
        <button onClick={onClearList}>clear list </button>
      </div>
    </div>
  );
};
export default PackingList;
