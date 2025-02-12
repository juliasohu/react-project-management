import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api";

function EditProjectPage() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { projectId } = useParams();
    const navigate = useNavigate()

    
useEffect(() => {
    axios.get(`${API_URL}/projects/${projectId}`)
    .then((response) => {
        setTitle(response.data.title)
        setDescription(response.data.description)
    })
    .catch(e => console.log("Error", e))
}, [projectId])

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            title: title,
            description: description,
        }

        axios.put(`${API_URL}/projects/${projectId}`, newDetails)
            .then( response => {
                navigate(`/projects/${projectId}`)
            })
            .catch(e => console.log("Error updating project...", e));
    }

    return (
        <div className="EditProjectPage">

            <h3>Edit the Project</h3>

            <form onSubmit={handleFormSubmit}>

                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter the title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description:
                    <textarea
                        name="description"
                        placeholder="Enter the description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <button type="submit">Update Project</button>
            </form>

        </div>
    );
}

export default EditProjectPage;