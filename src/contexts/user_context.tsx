import { createContext, useContext, useEffect, useState } from "react";
import UserInterface, { defaultUser } from "../interfaces/user";
import { getUserByEmail } from "../utils/firebase/firestore";
import fire from "../utils/firebase/main";

const USER_CONTEXT=createContext<[UserInterface,any]>([defaultUser,null]);

export function useUser(){
    return useContext(USER_CONTEXT)
}

export default function UserContext({children}:any){
    const [user,setUser]=useState<UserInterface>(defaultUser);
    useEffect(()=>{
        fire.auth().onAuthStateChanged(user=>{
            if(user){
                if(user.email){
                    getUserByEmail(user.email).then(docData=>{
                        if(docData){
                            setUser(docData)
                        }
                    });
                    
                }
            }
        })
    },[])
    return <USER_CONTEXT.Provider value={[user,setUser]}>
        {children}
    </USER_CONTEXT.Provider>
    
}