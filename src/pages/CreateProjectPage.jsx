import { useState } from "react";
import { API_URL } from "../config/api";
import axios from "axios";

function CreateProjectPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProject = {
            title: title,
            description: description,
        }

        axios.post(`${API_URL}/projects`, newProject)
        .then(response => {
            console.log("SUCCESSSSSS")
            setTitle("")
            setDescription("")
        })
        .catch(e => console.log("Error creating a new project :(", e))

    }


    return (
        <div className="CreateProjectPage">
            <h3>Add Project</h3>

            <form onSubmit={handleSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </label>

                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        placeholder="Describe your project"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateProjectPage;