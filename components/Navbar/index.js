import Input from '../Input';
import Logo from '../Logo'
import styles from '../../styles/Navbar.module.scss';

export default function Navbar({type, placeholder, handhleSearch, logo }){

  function handleInput(value){
    handhleSearch(value)
  }  
  return(
    <nav className={styles.navbar}>
      <Logo logo={logo} />
      <Input type={type} placeholder={placeholder} handleInput={handleInput}/>
    </nav>
  )
}