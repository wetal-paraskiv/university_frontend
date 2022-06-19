import React, { useState } from "react";
import axios from "axios";

export default function StudentById() {
  const [state, setState] = useState({});
  const [id, setid] = useState("")

  const handleChange = (event) => {
    setid(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/api/students/${id}`)
      .then((res) => {
        const student = res.data;
        setState(student);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="enter student ID" onChange={handleChange} />
        <button type="submit">get student by ID</button>
        <ul>
          <li>
            ID: {state.id}, name: {state.firstName}{" "}
            {state.lastName}, email: {state.email}
          </li>
        </ul>
      </form>
    </div>
  );
}
