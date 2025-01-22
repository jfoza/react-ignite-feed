import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Post } from "./components/Post.jsx";
import './global.css'
import styles from './App.module.css';
import { v4 as uuid4 } from 'uuid';

export interface IAuthor {
  avatarUrl: string,
  name: string,
  role: string,
}

export interface IContent {
  id: string,
  type: string,
  content: string,
}

export interface IPost{
  id: string,
  author: IAuthor,
  content: IContent[],
  publishedAt: Date
}

const posts: IPost[] = [
  {
    id: uuid4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4',
      name: 'Giuseppe Foza',
      role: 'Desenvolvedor Full Stack'
    },

    content: [
      { id: uuid4(), type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: uuid4(), type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: uuid4(), type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:23'),
  },

  {
    id: uuid4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4',
      name: 'Giuseppe Foza',
      role: 'Desenvolvedor Full Stack'
    },

    content: [
      { id: uuid4(), type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: uuid4(), type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: uuid4(), type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-04-02 13:21:02'),
  },

  {
    id: uuid4(),
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/58996235?s=400&u=897f7d99f028022b26a600cd658027efc4be71da&v=4',
      name: 'Giuseppe Foza',
      role: 'Desenvolvedor Full Stack'
    },

    content: [
      { id: uuid4(), type: 'paragraph', content: 'Fala galeraa 👋' },
      { id: uuid4(), type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { id: uuid4(), type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-03-05 16:35:58'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}