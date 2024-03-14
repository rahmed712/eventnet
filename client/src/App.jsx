import { useState } from 'react'
import './App.css' 
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import userContext from './userContext'


function App() {
  const [userType, setUserType] = useState({
    owner: '',
    host: ''
  })
  
  
  const[loggedIn,setLoggedIn] =  useState(false)
 
const [user, setUser] = useState([])

  return (
    <div>
       <userContext.Provider value={{userType,setUserType,loggedIn,setLoggedIn,user, setUser}}>
      <Header />
      <Main />
      </userContext.Provider>
    </div>
  )
}

export default App
