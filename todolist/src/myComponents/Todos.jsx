import React from "react";
import Todoitems from "./Todoitems";
export default ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>
      {todos.length == 0
        ? "Nothing in list"
        : todos.map((todo) => {
            return (
              <Todoitems todo={todo} key={todo.srno} onDelete={onDelete} />
            );
          })}
    </div>
  );
};
