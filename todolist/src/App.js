import "./App.css";
import Navbar from "./myComponents/Navbar.jsx";
import Todos from "./myComponents/Todos.jsx";
import Footer from "./myComponents/Footer.jsx";
import Addtodos from "./myComponents/AddTodo.jsx";
import React, { useState } from "react";

function App() {
  const [todos, setTotos] = useState([
    {
      srno: 1,
      title: "First todo",
      desc: "You have to first  do this job done",
    },
    {
      srno: 2,
      title: "Second todo",
      desc: "You have do this job done after first",
    },
    {
      srno: 3,
      title: "Third todo",
      desc: "You have do this job done after second",
    },
  ]);
  const addTodo = (title, desc) => {
    console.log("I am adding todo", title, desc);
    const srno = todos[todos.length - 1].srno + 1;
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    };
    setTotos([...todos, myTodo]);
    console.log(myTodo);
  };
  const onDelete = (todo) => {
    console.log("I am deleted", todo);
    setTotos(
      todos.filter((e) => {
        return e != todo;
      })
    );
  };
  return (
    <>
      <Navbar title="My Todos List" searchBar={false} />
      <Addtodos addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
