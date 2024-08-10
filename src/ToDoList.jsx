import React, {useState} from "react";

function ToDoList(){

    const [taskList, setTaskList] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDueDate, setTaskDueDate] = useState(new Date().toDateString());
    const [taskStatus, setTaskStatus] = useState(false); //false: not finished true: finished

    const taskDate = new Date().toDateString();

    function handleAddTask(){
        const newTask = {
            name: taskName,
            creationDate: taskDate,
            dueDate: taskDueDate,
            status: taskStatus
        };

        setTaskList(prevTasks =>[...prevTasks, newTask]);

        // Reset input fields after adding the task
        setTaskName("");
        setTaskDueDate(new Date().toDateString());
        setTaskStatus(false);
    }

    function handleRemoveTask(index){

    }

    function handleNameChange(event){
        setTaskName(event.target.value);
    }

    function handleDueDateChange(event){
        setTaskDueDate(event.target.value);
    }

    function handleStatusChange(index){
        const updatedTaskList = taskList.map((task, i) => {
            if (i === index) {
                return { ...task, status: !task.status };
            }
            return task;
        });

        setTaskList(updatedTaskList);
    }

    return (
        <div className="ToDo-list-container">
            <h1 className="title">Your TO-DO list</h1>
            <ul className="list">
                {taskList.map((task, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox" 
                            checked={task.status} 
                            onChange={() => handleStatusChange(index)} 
                        />
                        {task.creationDate} - {task.name} - {task.dueDate}
                    </li>
                ))}
            </ul>

            <input type="text" placeholder="Task Name" value={taskName} onChange={handleNameChange} />
            <input type="date" value={taskDueDate} onChange={handleDueDateChange} />
            <button onClick={handleAddTask}>Add task</button>
        </div>
    );
}

export default ToDoList;
