import styles from './input.module.scss'

export default function Input({icon, label}) {
  return (
    <div className="mb-8">
      <label className="block text-lg mb-4" htmlFor="input">{label}</label>
      {icon && <img className={styles['input__icon']} src={`/${icon}`} />}
      <input className={`block w-full ${styles.input}`}  id="input" type="text" placeholder="Placeholder"/>  
    </div>
  )
}