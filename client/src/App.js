import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import postList from "./components/PostList";
function App() {
  return (
    <Admin dataProvider={restProvider("http://127.0.0.1:8080")}>
      <Resource name="posts" list={postList}></Resource>
    </Admin>
  );
}

export default App;
