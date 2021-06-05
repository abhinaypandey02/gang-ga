export default interface GymInterface{
    uid:string;
    name:string;
    location:{
        latitude:number;
        longitude:number;
        country:string;
        state:string;
        district:string;
        locality:string;
        area:string;
    };
}
export const defaultGym:GymInterface={
    uid:"",
    name:"",
    location:{
        latitude:NaN,
        longitude:NaN,
        country:'',
        state:'',
        district:'',
        locality:'',
        area:'',
    }
}