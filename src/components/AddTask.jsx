import { useState } from "react";
import { API_URL } from "../config/api";
import axios from "axios";

function AddTask({projectId, getProject}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            projectId: parseInt(projectId),
            title: title,
            description: description,
        }

       axios.post(`${API_URL}/tasks`, newTask)
       .then(response => {
        getProject()
        setTitle("")
        setDescription("")
       })
       .catch(e => console.log("Error creating a new task...", e));
    }

    return (
        <div className="AddTask">
            <h3>Add New Task</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit">Add Task</button>
                
            </form>
        </div>
    );
}

export default AddTask;