import { useState, useMemo, createContext, useContext } from 'react';

const ToDoContext = createContext();

export function ToDoProvider(props) {
  const DB_NAME = 'todo_list';
  const storage = localStorage.getItem(DB_NAME);
  const data = JSON.parse(storage) ?? [];

  const [toDolist, setToDolist] = useState(data);

  const tasksToDo = useMemo(() => {
    const data = toDolist.filter((e) => e.complete === false);
    return data;
  }, [toDolist]);

  const tasksComplete = useMemo(() => {
    const data = toDolist.filter((e) => e.complete === true);
    return data;
  }, [toDolist]);

  const handleAddStorage = (data) => {
    localStorage.setItem(DB_NAME, JSON.stringify(data));
  };

  const handleAdd = (data) => {
    const newData = [...toDolist, data];
    setToDolist(newData);
    handleAddStorage(newData);
  };

  const handleDelete = (id) => {
    const searchIndex = toDolist.findIndex((i) => i.id === id);
    if (searchIndex === -1) return;
    toDolist.splice(searchIndex, 1);
    const newData = [...toDolist];
    setToDolist(newData);
    handleAddStorage(newData);
  };

  const handleComplete = (id) => {
    const searchIndex = toDolist.findIndex((i) => i.id === id);
    if (searchIndex === -1) return;
    toDolist[searchIndex].complete = true;
    const newData = [...toDolist];
    setToDolist(newData);
    handleAddStorage(newData);
  };

  return (
    <ToDoContext.Provider
      value={{
        tasksToDo,
        tasksComplete,
        onAdd: handleAdd,
        onDelete: handleDelete,
        onComplete: handleComplete
      }}
      {...props}
    />
  );
}

export const useToDo = () => useContext(ToDoContext);
