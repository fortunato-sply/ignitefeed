import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar/Sidebar";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lucas Fortunato" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ducimus iure vel excepturi quasi quidem itaque blanditiis impedit ullam dolorum neque veniam quia iste, placeat temporibus ipsum nulla debitis numquam?"
          />
          <Post
            author="Gabriel Jesus" 
            content="Queria saber qual a funcionalidade de uma braçadeira mecânica."
          />
        </main>
      </div>
    </>
  )
}
