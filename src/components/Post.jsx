import styles from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4" />

          <div className={styles.authorInfo}>
            <strong>Giuseppe Foza</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 {' '}<a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#nlw</a>{' '}
            <a href="#">#rocketseat</a>{' '}
          </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea placeholder="Deixe um comentário...">

        </textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}