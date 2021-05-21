import 'firebase/auth';
import fire from './main';


export async function signUpWithEmailPassword(email:string,password:string){
    return await fire.auth().createUserWithEmailAndPassword(email,password);
}

export async function signInWithEmailPassword(email:string,password:string){
    return await fire.auth().signInWithEmailAndPassword(email,password);
}