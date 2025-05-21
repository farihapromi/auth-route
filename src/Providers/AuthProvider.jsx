import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext } from 'react'
import auth from '../firebase.init'
 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo={
        name:"promi",
      createUser
    }
  return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
