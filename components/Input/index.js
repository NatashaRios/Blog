import styles from '../../styles/Input.module.scss';

export default function Input({ type, placeholder, handleInput }){

  return(
    <>
      <input className={styles.input} type={type} placeholder={placeholder} onChange={(e) => handleInput(e.target.value)} />
    </>
  )
}