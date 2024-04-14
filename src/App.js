import "./index.css";
import { useState, useEffect} from "react";

const App = () => {
  const [value, setValue] = useState(null)
  const [message, setMessage] = useState(null)
  const [previousChats, setPreviousChats] = useState([])
  const [currentTitle, setCurrentTitle] = useState([null])

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch("http://localhost:8000/completions", options);
      const data = await response.json();
      console.log(data);
      setMessage(data.choices[0].message);
    } catch (error) {
      //console.error(error);
    }
  };

  useEffect(() => {
    console.log(currentTitle, value, message)
    if (!currentTitle && value && message) {
      setCurrentTitle(value)
      setPreviousChats([...previousChats, {title: value, message}])
    } 
   if (currentTitle && value && message) {
      setPreviousChats(prevChats => ([...prevChats,
         {
          title: currentTitle,
          role: "user",
          content: value,

         },
          {
            title: currentTitle,
            role: message.role,
            content: message.content
          }
        ]
      )) 
    }

  }, [message, currentTitle])


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
          {!currentTitle && <h1>Cody GPT Test</h1>}
        </header>
        <ul className="feed"></ul>

        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>
              &#10146;
            </div>
          </div>
          <p className="info">Custom API interation/testing interface.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
