import React from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteList from "../redux/action/index";

const ListTodo = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <h5>{todo.title} </h5>
          <button onClick={dispatch(deleteList(index))}>delete</button>
        </div>
      ))}
    </>
  );
};

export default ListTodo;