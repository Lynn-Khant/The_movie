import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const AuthContext=createContext();
export function AuthContextProvider({children}){
    const [user,setUser]=useState({});
    const signUp=(email,password)=>{
        createUserWithEmailAndPassword(auth,user,password);
        setDoc(doc(db,"users",email),{
            savedShows:[]
        })
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })

        return()=>{
            unsubscribe()
        }
    })
    return(
        <AuthContext.Provider value={{signIn,signUp,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}