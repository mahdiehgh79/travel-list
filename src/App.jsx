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

const Logo = () => {
  return <h1>🌴 Far Away 💰 </h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>what do you need for your 🙋 trip?</h3>
    </div>
  );
};

const PackingList = () => {
  return <div className="list">list</div>;
};

const Stats = () => {
  return (
    <footer className="stats">
      <em>you have x items in your list and you alredy packed x(x%)</em>
    </footer>
  );
};
export default App;
