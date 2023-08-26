import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar";

interface CommentProps{
  content: string;
  onDeleteComment: (comment : string) => void;
}

export function Comment({
  content,
  onDeleteComment
}: CommentProps) {

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder = {false}
        src="https://github.com/brunogs.png" 
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas D. Coelho</strong>

              <time
                title="22 de Agosto de 2023"
                dateTime="2023-08-22 13:38:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}