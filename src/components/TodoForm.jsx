import React from "react";

function TodoForm({ setTodos, newItem, setNewItem }) {
  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem || newItem === "") {
      alert("Please Enter a Valid Input");
      return;
    }

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <input
            type="text"
            id="item"
            placeholder="Enter Item"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
