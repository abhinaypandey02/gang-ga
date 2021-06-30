import UserInterface from "../../interfaces/user";
import { updateUserProfilePictureURL } from "./firestore";
import fire from "./main";

export const uploadImage=async (user:UserInterface,file:any)=>{
    const ref=fire.storage().ref(`${user.email}/pp.png`);
    await ref.put(file);
    const url=await ref.getDownloadURL();
    return await updateUserProfilePictureURL(user,url);
}
export const uploadGymImages=async (gymID:string,files:any[])=>{
    let gallery=[];
    for(let file of files){
        const ref=fire.storage().ref(`${gymID}/gallery/${file.name}`);
        await ref.put(file);
        const url=await ref.getDownloadURL();
        gallery.push(url);
    }
    return gallery;
    
}