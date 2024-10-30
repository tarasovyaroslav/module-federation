import React, { useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiURL = "https://jsonplaceholder.typicode.com/users";

    try {
      const response = await axios.get(apiURL);
      const user = response.data.find((user: any) => user.username === username && user.email === password);

      if (user) {
        const token = btoa(JSON.stringify(user)); // Фэйковый токен
        localStorage.setItem("token", token);
        setMessage("Успешный вход!");
      } else {
        setMessage("Неверные учетные данные!");
      }
    } catch (error) {
      setMessage("Ошибка при обращении к API");
    }
  };

  return (
    <div>
      <h2>Auth page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
        <p>{message}</p>
      </form>
    </div>
  );
};

export default App;
