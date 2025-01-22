import styles from "./Comment.module.css";
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";
import {useState} from "react";
import {IComment} from "./Post.tsx";

interface ICommentProps {
  info: IComment;
  onDeleteComment: (id: string) => void;
}

export function Comment({ info, onDeleteComment }: Readonly<ICommentProps>) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(info.id)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Giuseppe Foza</strong>
              <time title="11 de Maio às 08:13" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>
            {info.content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}