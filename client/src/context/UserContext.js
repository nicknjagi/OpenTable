import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export default function UserProvider({ children }) {
  const [onchange, setOnchange] = useState(false)
  const [authToken, setAuthToken] = useState(() =>
    sessionStorage.getItem('authToken')
      ? sessionStorage.getItem('authToken')
      : null
  )
  const [currentUser, setCurrentUser] = useState(null)

  const navigate = useNavigate()

  // add user
  function addUser(username, email, password) {
    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
            window.location.href = '/login'
            setOnchange(!onchange)
        } else {
          setOnchange(!onchange)
        }
      })
  }

  // login user
  function login(username, password) {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.access_token) {
          sessionStorage.setItem('authToken', response.access_token)
          setAuthToken(response.access_token)

          navigate('/')
          setOnchange(!onchange)
        } else {
            console.log('error logging in');
        }
      })
  }

  // Logout user
  function logout() {
    sessionStorage.removeItem('authToken')
    setCurrentUser(null)
    window.location.href = '/login'
  }

  // Get Authenticated user
  useEffect(() => {
    if (authToken) {
      fetch('/authenticated_user', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.email || response.username) {
            setCurrentUser(response)
          } else {
            setCurrentUser(null)
          }
        })
    }
  }, [authToken, onchange])

  console.log('current user', currentUser)

  // context data
  const contextData = {
    addUser,
    login,
    logout,
    currentUser

    // pass all your variables and function
  }

  return (
    <UserContext.Provider value={contextData}>{children}</UserContext.Provider>
  )
}
