import styles from "./Post.module.css";
import {Comment} from "./Comment.jsx";
import {Avatar} from "./Avatar.jsx";
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import {useState, FormEvent, ChangeEvent, InvalidEvent} from "react";
import { v4 as uuid4 } from 'uuid';
import {IPost} from "../App.tsx";

export interface IComment {
  id: string,
  content: string,
}

export function Post({ author, content, publishedAt }: Readonly<IPost>) {
  const [comments, setComments] = useState<IComment[]>([]);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  const isNewCommentEmpty = newCommentText.length === 0

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, { id: uuid4(), content: newCommentText }])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório.")
  }

  function handleDeleteComment(commentId: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment.id !== commentId)

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if(item.type === 'paragraph') {
            return <p key={item.id}>{item.content}</p>
          } else if(item.type === 'link') {
            return <p key={item.id}><a href="#">{item.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback!</strong>

        <textarea
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          placeholder="Deixe um comentário..."
          value={newCommentText}
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) =>
          <Comment
            key={comment.id}
            info={comment}
            onDeleteComment={handleDeleteComment}
          />
        )}
      </div>
    </article>
  );
}