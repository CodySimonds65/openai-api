import "./App.css";

const App = () => {
  return (
    <div className="App">
      <section className="side-bar">
        <button className="side-bar__button">+ New chat</button>
        <ul className="history">
          <li className="side-bar__list-item">Chat 1</li>
          <li className="side-bar__list-item">Chat 2</li>
          <li className="side-bar__list-item">Chat 3</li>
        </ul>
        <nav className="side-bar__nav">
          <p>Cody's firsy API test</p>
        </nav>
      </section>
      <section className="main"></section>
    </div>
  );
};

export default App;
