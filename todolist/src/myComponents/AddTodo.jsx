import React, { useState } from "react";
export default ({ addTodo }) => {
  const addtodoStyle = {};
  const [title, setTitile] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Plaese Fill the values");
    }
    addTodo(title, desc);
  };
  return (
    <div>
      <div className="container my-3 main" style={addtodoStyle}>
        <h3 className="m-2">Add Todos</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label>Todo Title</label>
            <input
              type="text"
              name="title"
              htmlFor="title"
              id="title"
              value={title}
              onChange={(e) => setTitile(e.target.value)}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label>Todo Descripation</label>
            <input
              type="text"
              name="desc"
              htmlFor="desc"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};
