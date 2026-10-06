import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from '../components/Header'
import UserList from '../components/UserList'

export default function App() {

  const [users, setUsers] = useState([]);

useEffect(() => {
  async function fetchUsers(){
    const url = "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/users.json";
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  }
  fetchUsers();
}, []);



return(
<>
  <main className='app'>
    <Header />
    <UserList users={users}/>


  </main>
</>
);
}