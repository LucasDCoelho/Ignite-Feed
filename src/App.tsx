import { Post } from "./components/Post/Post"
import { Header } from "./components/Header/Header"
import { SideBar } from "./components/Sidebar/Sidebar"

import styles from "./App.module.css"

import "./global.css"

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucasdcoelho.png",
      name: "Lucas D. Coelho",
      role: "Full Stack Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-08-22 17:50:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/BrunoGS.png",
      name: "Bruno Gomes",
      role: "Front-end Developer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2023-08-20 19:20:30"),
  },
]



function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id} 
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            );
          })}
        </main>
      </div>

    </>
  )
}

export default App
