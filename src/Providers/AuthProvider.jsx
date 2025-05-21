import React, { createContext } from 'react'
const AuthContext=createContext(null)

const AuthProvider = () => {
    const authInfo={
        name:"promi",
        age:23
    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
