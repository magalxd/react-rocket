import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar() {

  return(
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>

      <div className={styles.profile}> 
      <Avatar  src= 'https://avatars.githubusercontent.com/u/77452496?v=4' />
      <strong>Gustavo Magalhães</strong>
      <span>Estagiário em Versatil Now</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size = {20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}