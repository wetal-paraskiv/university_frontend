import React, { useState } from "react";
import axios from "axios";

export default function StudentAdd() {
  const [allValues, setAllValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  function refreshPage() {
    window.location.reload(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const student = {
      'firstName': allValues.firstName,
      'lastName': allValues.lastName,
      'email': allValues.email,
    };

    axios
      .post(`http://localhost:8080/api/students`, { ...student })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
      refreshPage();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          onChange={changeHandler}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={changeHandler}
        />
        <br />
        <button type="submit">add new student</button>
      </form>
    </div>
  );
}
