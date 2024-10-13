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

export default Item;
