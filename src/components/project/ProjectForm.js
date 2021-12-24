import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({btnText}){
    return(
        <div>
            <form className={styles.form}>
                <Input 
                    type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insira o nome do projeto"
                />
                   <Input 
                    type="number" 
                    text="Orçamento do projeto" 
                    name="budget" 
                    placeholder="Insira o nome total"
                />
                <Select 
                    name="category_id"
                    text="Selecione a categoria" 
                />
                <SubmitButton text={btnText}/>
            </form>
        </div>
    )
}

export default ProjectForm;