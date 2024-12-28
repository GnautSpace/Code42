import { useState} from "react";
import marvinBot from "../assets/robot.png";
import saturn2 from "../assets/saturn-2.jpeg";
import saturn1 from "../assets/saturn-1.jpeg";
import "../style/MarvinBot.css";


function MarvinBot() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [chatVisible, setChatVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
 {/* const dummyDivRef = useRef(null);*/}

  const getResponse = async () => {
    if (!value) {
      setError("Too busy to talk right now!");
      return;
    }
    setIsTyping(true);
    try {
      const options = {
        method: "POST",
        body: JSON.stringify({
          history: chatHistory,
          message: value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
     
      const response = await fetch("https://code42.onrender.com/chat", options);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.text();
      console.log(data);

      setChatHistory((oldChatHistory) => [
        ...oldChatHistory,
        { role: "", parts: value },
        { role: "Marvin", parts: data },
      ]);
      setValue("");
    } catch (error) {
      console.error(error);
      setError("Too busy to talk right now!");
    }
    finally {
      setIsTyping(false); 
    }
  };


  const clear = () => {
    setValue("");
    setError("");
    setChatHistory([]);
  };

 {/* useEffect(() => {
    if (dummyDivRef.current) {
      dummyDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory]); */}

  return (

    <div className="marvin-chat-bot">

      <img
        src={marvinBot}
        alt="Robot Icon"
        className="robot-icon"
        onClick={() => setChatVisible(!chatVisible)}
      />
      {chatVisible &&
        <div className="chat-window">
          <div className="search-section">
            <div className="search-result">
              {chatHistory.map((chatItem, idx) => (
                <div key={idx}
                className={`answer ${
                  chatItem.role === "" ? "user-message" : "bot-message"
                }`}
                >
                  <p className="answer">
                    {chatItem.parts}
                  </p>
                </div>
              ))}
            </div>
            {error && <p>Too busy to talk right now!</p>}
            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {/*<div ref={dummyDivRef} />*/}
            <div className="input-container">
              <textarea
                className="chat-input"
                value={value}
                placeholder="Go ahead, ask your question... I’m listening (barely)."
                onChange={(e) => setValue(e.target.value)}
                rows={1}
              />
              {!error && (

                <button className="chat-btn" onClick={getResponse}>
                  <img src={saturn2} alt="space shuttle" className="saturn1" />
                </button>

              )}
              {error && (
                <button className="clear-btn" onClick={clear}>
                  <img src={saturn1} alt="space shuttle" className="saturn2" />
                </button>
              )}
            </div>

          </div>
        </div>
      }
    </div>

  );
}

export default MarvinBot;
