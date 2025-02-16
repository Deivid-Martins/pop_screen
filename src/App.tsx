import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  )
}