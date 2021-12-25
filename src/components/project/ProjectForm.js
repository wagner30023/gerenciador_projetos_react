import { useState, useEffect} from 'react';

import styles from './ProjectForm.module.css'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories, setcategories] = useState([]);
    const [project, setProjecet] = useState(projectData || {});

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp)  => resp.json())
        .then((data) => {
            setcategories(data)
        })
        .catch((err) => { console.log(err)})

    },[])
    
    const submit = (e) => {
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProjecet({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProjecet({
            ...project, 
            category:{
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].value,
            }
        })
    }

    return(
        <div>
            <form onSubmit={submit} className={styles.form}>
                <Input 
                    type="text" 
                    text="Nome do projeto" 
                    name="name" 
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name: ''}
                />
                   <Input 
                    type="number" 
                    text="Orçamento do projeto" 
                    name="budget" 
                    placeholder="Insira o nome total"
                    handleOnChange={handleChange}
                    value={project.budget ?  project.budget : ''}
                />
                <Select 
                    name="category_id"
                    text="Selecione a categoria" 
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''}
                />
                <SubmitButton text={btnText}/>
            </form>
        </div>
    )
}

export default ProjectForm;