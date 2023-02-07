import React, { createContext, FC, useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { Alert } from "react-native";
import { auth, db, login, logout, register } from "../firebase";

interface IContext {
  user: User | null,
  isLoading: boolean, 
  register: (email: string, password: string)=> Promise<void>,
  login: (email: string, password: string)=> Promise<void>,
  logout: ()=> Promise<void>,
   
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingInitial, setIsLoadingInitial] = useState(true)

  const registerHandler = async (email: string, password: string) =>{
    setIsLoading(true);
    try{
      const {user} = await register(email, password);
      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name'
      })
    } catch(err: any){
      Alert.alert("Registration Err", err)
    } finally {
      setIsLoading(false)
    }
  }

  const loginHandler = async (email: string, password: string) =>{
    setIsLoading(true);
    try{
      await login(email, password);
    } catch(err: any){
      Alert.alert("Login Err", err)
    } finally {
      setIsLoading(false)
    }
  }

  const logoutHandler = async (email: string, password: string) =>{
    setIsLoading(true);
    try{
      await logout();
    } catch(err: any){
      Alert.alert("Logout Err", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      setUser(user || null);
      setIsLoadingInitial(false);
    })
  }, [])

  const value = useMemo(()=>({
    user, 
    isLoading, 
    login: loginHandler,
    logout: loginHandler,
    register: registerHandler
  }), [user, isLoading])

  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
}