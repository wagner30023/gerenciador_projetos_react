import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'
function NewProject(){
    return(
        <div className={styles.newproject_container }>
            <h1> Criar projeto </h1>
            <p> Cria seu projeto para depois adicionar o serviço </p>
            <p>Formulario</p>
            <ProjectForm btnText="Criar Projeto" />
        </div>
    ) 
}

export default NewProject;