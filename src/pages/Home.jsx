import React from "react";
import TaskForm from "../common/TaskForm";
import TaskList from "../common/TaskList";
import { useState } from "react";

const Home = () => {
    const [toDo, setToDo] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [error, setError] = useState('');

    const handleAddTask = () => {
    if (!toDo.trim()) {
        setError('Ingrese una tarea');
      return;
    }else{
        setError('');

      setMessageList([
        ...messageList,
        {
          id: messageList.length + 1,
          toDo: toDo,
        },
      ]);
      setToDo("");
    };
    }

    const handleDeleteTask = (id) => {
      setMessageList(messageList.filter((item) => item.id !== id));
    };
    return (
        <div className="task-manager">
          <h1 className="app-title">To do List</h1>
          <TaskForm
            toDo={toDo}
            setToDo={setToDo}
            handleAddTask={handleAddTask}
            emptyInput={error}
          />
          <TaskList
            messageList={messageList}
            handleDeleteTask={handleDeleteTask}
          />
        </div>
      );
  };

export default Home;
