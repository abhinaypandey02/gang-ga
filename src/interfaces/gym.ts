export default interface GymInterface{
    uid:string;
    name:string;
    description:string;
    location:{
        latitude:number;
        longitude:number;
        country:string;
        state:string;
        district:string;
        locality:string;
        area:string;
    };
    price:number;
    rating:number;
    features:string[];
    gallery:string[];
    type:"gym"|"park"
}
export const defaultGym:GymInterface={
    uid:"",
    name:"",
    description:"",
    location:{
        latitude:NaN,
        longitude:NaN,
        country:'India',
        state:'',
        district:'',
        locality:'',
        area:'',
    },
    price:0,
    rating:3,
    features:[],
    type:"gym",
    gallery:[]
}