import "../App.css";
import Filter from "./Filter";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Usercard from "./Usercard";

function App() {
  const [listOfUSer, setListOfUSer] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((arr) => setListOfUSer(arr.data));
  }, []);
  return (
    <div className="App">
      <Filter handleSearch={handleSearch} />
      <div className="container">
        {
          // displaying list of users in cards
          listOfUSer
            .filter((user) =>
              user.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => {
              return <Usercard key={user.id} user={user} />;
            })
        }
      </div>
    </div>
  );
}

export default App;
