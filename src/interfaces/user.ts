export default interface UserInterface{
    name:string;
    email:string;
    uid:string;
    enrolledSessions:string[]
}

export const defaultUser:UserInterface={
    name:"",
    email:"",
    uid:"",
    enrolledSessions:[]
}