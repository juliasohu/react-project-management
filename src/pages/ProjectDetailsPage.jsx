import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";

function ProjectDetailsPage(){

    const [project, setProject] = useState(null);
    const {projectId} = useParams()

    useEffect(() => {
       axios.get(`${API_URL}/projects/${projectId}`)
       .then((response) => {
        setProject(response.data)
       })
       .catch(e => console.log("Errooor", e))
    }, []);

    if(project === null){
        return <Loader />
    }

    return (
        <div className="ProjectDetailsPage">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            
            <Link to="/projects">
                <button>Back to projects</button>
            </Link>
        </div>
    );
}

export default ProjectDetailsPage;