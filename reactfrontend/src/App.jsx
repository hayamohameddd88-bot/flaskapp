import { useState, useEffect } from "react";

function App() {
  // State to store message from Flask
  const [message, setMessage] = useState("");

  // Fetch message from Flask backend on component mount
  useEffect(() => {
    fetch("http://backend:5000/")  // Use the Docker Compose service name
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error("Error fetching from backend:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Frontend</h1>
      <p>
        Message from Flask:{" "}
        <strong>{message ? message : "Loading..."}</strong>
      </p>
    </div>
  );
}

export default App;

