import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css"
import { Avatar } from "../Avatar/Avatar";

export function Comment() {
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

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
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