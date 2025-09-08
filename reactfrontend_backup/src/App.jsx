import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  fetch("http://backend:5000/")
    .then((res) => res.text())
    .then((data) => setMessage(data))
    .catch((err) => console.error(err));
}, []);


  return (
    <div>
      <h1>React Frontend</h1>
      <p>Message from Flask: {message}</p>
    </div>
  );
}

export default App;


