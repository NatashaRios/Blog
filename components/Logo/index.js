import styles from '../../styles/Logo.module.scss';

export default function Button({ logo }){
  return(
    <>
      <h1 className={styles.logo}>{logo}</h1>
    </>
  )
}