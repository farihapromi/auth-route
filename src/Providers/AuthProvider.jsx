import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../firebase.init'
 export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //login
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //observer.store the informaiton of user
    
    onAuthStateChanged(auth,currentUser=>{
        if(currentUser){
            console.log('curent user')
            setUser(currentUser)
        }
        else{
            console.log('No user')
            setUser(null)
        }

    })

    //pass value to context
    const authInfo={
        name:"promi",
        user,
      createUser,
       signInUser
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
