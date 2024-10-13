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
export default Stats;
