import styles from './input.module.scss'

export default function Input({icon, label, placeholder, curValue, update, id}) {
  return (
    <div className="mb-8">
      <label className="block text-lg mb-4" htmlFor="input">{label}</label>
      {icon && <img className={styles['input__icon']} src={`/${icon}`} />}
      <input 
        onChange={(e) => update(e.target.value)}
        value={curValue} 
        className={`block w-full ${styles.input}`}
        id={id}
        type="text" 
        placeholder={placeholder}
      />  
    </div>
  )
}