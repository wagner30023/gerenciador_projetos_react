import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
        <label htmlFor={name}></label>
        <select name={name} id={name} onChange={handleOnChange}>
            <option> Selecione um opção </option>
        </select>
    </div>
    )
}

export default Select;