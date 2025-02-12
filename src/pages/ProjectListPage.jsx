import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../components/Loader"

function ProjectListPage(){

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        axios.get("https://project-management-api-4641927fee65.herokuapp.com/projects")
        .then((response) => {
            setProjects(response.data)
        })
        .catch(e => console.log("Error getting data..."))
    }, [])

        if (projects === null){
            return <Loader />
        }
    return (
        <div>
        <h1>Number of projects... {projects.length}</h1>
        </div>
    )
}

export default ProjectListPage