export default interface UserInterface{
    name:string;
    email:string;
    uid:string;
    pp:string|null;
}

export const defaultUser:UserInterface={
    name:"",
    email:"",
    uid:"",
    pp:null
}