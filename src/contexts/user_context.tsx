import { createContext, useContext, useEffect, useState } from "react";
import UserInterface, { defaultUser } from "../interfaces/user";
import { getUserByEmail } from "../utils/firebase/firestore";
import fire from "../utils/firebase/main";

const USER_CONTEXT=createContext<[(UserInterface|null|undefined),any]>([undefined,null]);

export function useUser(){
    return useContext(USER_CONTEXT)
}

export default function UserContext({children}:any){
    const [user,setUser]=useState<UserInterface|undefined|null>(undefined);
    useEffect(()=>{
        fire.auth().onAuthStateChanged((user:any)=>{
            if(user){
                if(user.email){
                    getUserByEmail(user.email).then(docData=>{
                        if(docData){
                            setUser(docData)
                        } else setUser(null);
                    });
                    
                }else setUser(null);
            }else setUser(null);
        })
    },[])
    return <USER_CONTEXT.Provider value={[user,setUser]}>
        {children}
    </USER_CONTEXT.Provider>
    
}