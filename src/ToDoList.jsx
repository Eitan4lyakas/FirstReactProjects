import React, {useState} from "react";

function ToDoList(){

    const [taskList, setTaskList] = useState([]);
    const [finishedTasksList, setFinishedTasksList] = useState([]);
    const [taskName, setTaskName] = useState("");
    const [taskDueDate, setTaskDueDate] = useState(new Date().toDateString());

    const taskDate = new Date().toDateString();

    function handleAddTask(){
        const newTask = {
            name: taskName,
            creationDate: taskDate,
            dueDate: taskDueDate,
        };

        setTaskList(prevTasks =>[...prevTasks, newTask]);

        // Reset input fields after adding the task
        setTaskName("");
        setTaskDueDate(new Date().toDateString());
        setTaskStatus(false);
    }

    function handleRemoveTask(index){
        //console.log(taskList[index]);
        const finishedTask = {
            name: taskList[index].name,
            creationDate: taskList[index].creationDate,
            dueDate: taskList[index].dueDate
        }

        setFinishedTasksList(prevTasks =>[...prevTasks, finishedTask]);
        setTaskList(prevTasks => prevTasks.filter((_, i) => i !== index));

        
    }

    function handleNameChange(event){
        setTaskName(event.target.value);
    }

    function handleDueDateChange(event){
        setTaskDueDate(event.target.value);
    }

    return (
        <div className="ToDo-list-container">
            <h1 className="title">Your TO-DO list</h1>
            <div className="small-titles">
                <h2>Date</h2> <h2>Task</h2> <h2>Due Date</h2>
            </div>
            <ul className="list">
                {taskList.map((task, index) => (
                    <li key={index}>
                        <p className="details">{task.creationDate}</p>  
                            <p className="details">{task.name}</p>  
                            <p className="details">{task.dueDate}</p>
                        <input
                            type="checkbox" 
                            onChange={() => handleRemoveTask(index)} 
                        />
                    </li>
                ))}
            </ul>
            
            <div className="inputButtons">
                <input type="text" placeholder="Task Name" value={taskName} onChange={handleNameChange} />
                <input type="date" value={taskDueDate} onChange={handleDueDateChange} /> <br></br>
                <button onClick={handleAddTask}>Add task</button>
            </div>
            <div className="finished-tasks">
                <h1>Finished tasks:</h1> 
                <ul className="Finished-list">
                    {finishedTasksList.map((finishedTask, index) => (
                        <li key={index}>
                            <p className="details">{finishedTask.creationDate}</p>  
                                <p className="details">{finishedTask.name}</p>  
                                <p className="details">{finishedTask.dueDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
