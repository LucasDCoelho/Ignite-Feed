import { format } from "date-fns"
import ptBR from "date-fns/locale/pt-BR";
import { Comment } from "../Comment/Comment";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css"

interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  }
  content: {
    type: string;
    content: string;
  }[]
  publishedAt: Date
}

export function Post({
  author,
  content,
  publishedAt
}: PostProps) {
  const publishedDateFormatter = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title="22 de Agosto de 2023"
          dateTime="2023-08-22 13:38:30"
        >
          {publishedDateFormatter}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(ctx => {
          return (
            <>
              <p>{ctx.content}</p>

              <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

              <p><a href="">jane.design/doctorcare</a></p>

            </>
          )
        })}


        <p>
          <a href="">#novoprojeto</a>{" "}
          <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>
        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
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