import styles from './button.module.scss'

export default function Button({children, variant, handleClick}) {

  const handler = (evt) => {
    console.log('YOU CLICKED ME')
    handleClick()
  }
 
  return (
    <button
      onClick={handler} 
      className={`mr-2 ${styles.button} ${styles[`button--${variant}`]}`}
    >
        {children}
    </button>
  )
}