import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://github.com/fortunato-sply.png"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Fortunato</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="13 de Junho às 21:35h" dateTime="2022-06-13 21:35:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Escreva um comentário..."
        />

        <button type="submit">Publicar</button>
      </form>
    </article>
  )
}