import styles from './Sidebar.module.css'
import { PencilLine }  from 'phosphor-react'
import {Avatar} from "./Avatar.jsx";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4" />
        
        <strong>Giuseppe Foza</strong>
        <span>Full Stack Developer</span>
      </div>
      
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}