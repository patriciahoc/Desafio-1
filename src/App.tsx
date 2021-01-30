import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./componentes/Posts";

const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`${API}/users/`).then((resposta) => setUsuarios(resposta.data));
  }, []);

  useEffect(() => {
    if (id === "") return;
    axios
      .get(`${API}/users/${id}/posts`)
      .then((resposta) => setPosts(resposta.data));
  }, [id]);

  return (
    <div className="App">
      <h2>Usuarios</h2>
      <ul>
        {usuarios.map(({ id, name }) => (
          <li key={id} onClick={() => setId(id)}>
            {name} ({id})
          </li>
        ))}
      </ul>

      <Posts posts={posts} />
    </div>
  );
}

export default App;
