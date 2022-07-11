import { Header } from './components/header'
import Post from './Post'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
function App() {
  
  return (
    <div>
      <Header />
    
    <div className={styles.wrapper}>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Post author ="Gustavo Magalhães" content ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo iusto qui, exercitationem, vel excepturi, perferendis minima nihil maxime facere dignissimos ullam ex aut neque consectetur. Nobis tempore vel in culpa?" />

        <Post author ="Jonathan Joestar" content = "Onde está você Dio?" />
      </main>
    </div>

    </div>
  )
}

export default App
