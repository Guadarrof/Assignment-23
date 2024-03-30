import React from "react";
import InputGroup from "./InputGroup";
import Button from "./Button";

const TaskForm = ({toDo, setToDo, handleAddTask, emptyInput}) => {
  return (
    <div className="body">
      <InputGroup
        label="Add a task"
        type="text"
        value={toDo}
        error={emptyInput}
        placeholder="Enter a Task"
        onChange={(e) => {
          setToDo(e.target.value);
        }}
      />
      <Button
        text="Save"
        onClick={handleAddTask}
        className="bnt-save"
      />
    </div>
  );
};

export default TaskForm;
