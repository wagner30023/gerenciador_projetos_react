import {useHistory}  from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){

    const history = useHistory()

    function createPost(project){
        // initialize costs and services 
        project.post = 0
        project.services = []

        fetch("http://localhost:5000/projects",{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {
           console.log(data) 
            // redirect
            history.push('/projects', {message: 'Projeto criado com sucesso!'})
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container }>
            <h1> Criar projeto </h1>
            <p> Cria seu projeto para depois adicionar o serviço </p>
            <p>Formulario</p>
            <ProjectForm  handleSubmit={createPost}  btnText="Criar Projeto" />
        </div>
    ) 
}

export default NewProject;