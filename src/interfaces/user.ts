export default interface UserInterface{
    name:string;
    email:string;
    phone:number;
    uid:string;
    isGymOwner:boolean;
    ownedGyms:string[];
    enrolledSessions:string[]
}

export const defaultUser:UserInterface={
    name:"",
    email:"",
    uid:"",
    phone:0,
    isGymOwner:false,
    ownedGyms:[],
    enrolledSessions:[]
}