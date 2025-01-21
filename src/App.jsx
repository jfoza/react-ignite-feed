import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";
import './global.css'
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Giuseppe Foza"
            content="Lorem ipsum dolor sit anet..."
          />

          <Post
            author="Gabriel Buzzi"
            content="Novo Post"
          />
        </main>
      </div>
    </div>
  )
}