import styles from './button.module.scss'

export default function Button({children, variant, doThisWhenClicked}) {

  return (
    <button
      onClick={doThisWhenClicked} 
      className={`mr-2 ${styles.button} ${styles[`button--${variant}`]}`}
    >
        {children}
    </button>
  )
}