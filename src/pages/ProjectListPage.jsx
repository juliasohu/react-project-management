import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../components/Loader"
import {API_URL} from "../config/api"

function ProjectListPage(){

    const [projects, setProjects] = useState(null)

    useEffect(() => {
        axios.get(`${API_URL}/projects`)
        .then((response) => {
            setProjects(response.data)
        })
        .catch(e => console.log("Error getting data...", e))
    }, [])

        if (projects === null){
            return <Loader />
        }
    return (
        <div>
        <h1>Number of projects... {projects.length}</h1>

        {projects.map((p) => {
            return (
            <div className="card" key={p.id}>
            <h2>{p.title}</h2>
            </div>
            )
        })}

        </div>
    )
}

export default ProjectListPage