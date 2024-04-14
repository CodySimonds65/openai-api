import "./index.css";

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button className="side-bar__button">+ New chat</button>
        <ul className="history">
          <li className="side-bar__list-item">Chat 1</li>
          <li className="side-bar__list-item">Chat 2</li>
          <li className="side-bar__list-item">Chat 3</li>
        </ul>
        <nav className="side-bar__nav">
          <p>Openai API Test Project</p>
        </nav>
      </section>
      <section className="main">
        <header className="main__header">
          <h1>Cody GPT Test</h1>
        </header>
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container"></div>
        </div>
      </section>
    </div>
  );
};

export default App;
