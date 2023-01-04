import React from 'react'
import styles from './App.module.css'

function App() {
  return (
    <div className={`${styles['container']}`}>
      <nav className={`${styles['navBar']}`}>
        <span>Home</span>
        <span>Explore</span>
        <span>Notifications</span>
        <span>Messages</span>
        <span>Profile</span>
        <span>Tweet</span>
      </nav>
      <main className={`${styles['mainContainer']}`}></main>
      <section className={`${styles['otherContainer']}`}></section>
    </div>
  )
}

export default App
