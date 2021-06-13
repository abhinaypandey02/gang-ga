export default interface EnrolledSession{
    gym:string;
    uid:string;
    attendee:string;
    daysSubscribed:number;
    reciept:{
        amount:number;
        paymentID:string;
        orderID:string;
        signature:string;
    }
}