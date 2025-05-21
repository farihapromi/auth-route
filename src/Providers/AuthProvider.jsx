import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
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

    //signout
    const signoutUser=()=>{
        return signOut(auth)
    }
    //observer.store the informaiton of user

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
     
            console.log('curent user')
            setUser(currentUser)
        
        

    })
    return ()=>{
        unSubscribe() //cleanup,unmount
    }
    },[])

    //pass value to context
    const authInfo={
        name:"promi",
        user,
      createUser,
       signInUser,
       signoutUser
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
