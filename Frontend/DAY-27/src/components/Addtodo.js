import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import addList from "../redux/action/index";

const AddTodo = () => {
  const [item, setState] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setState(e.target.value);
        }}
        placeholder="add todo ..."
      />
      <button
      type="submit"
        onClick={(e) => {
          dispatch(
            addList({
              title: item,
              done:false
            })
          );
          setState(e.target.value);
        }}
      >
        add
      </button>
    </>
  );
};

export default AddTodo;