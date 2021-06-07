import { green } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import EnrolledSession from '../../../interfaces/enrolledSessions'
import GymInterface from '../../../interfaces/gym'
import getPlanName from '../../../utils/extras/functions';
import { getGymByID } from '../../../utils/firebase/firestore';
import '../user_page.css';
export default function PastRegistrationCard({session}:{session:EnrolledSession}) {
    const [gym,setGym]=useState<GymInterface>();
    useEffect(()=>{
        getGymByID(session.gym).then(data=>setGym(data))
    },[])

    return (
        <div className="pastcard text-center">
        <table className="table text-light">
            <tbody style={{textAlign:'left'}}>
            <tr>
                <td>Gym:</td>
                <td>{gym?<Link className='text-warning' to={"/gym/"+gym.uid}>{gym.name}</Link> :"loading"}</td>
            </tr>
            <tr>
                <td>Amount Paid:</td>
                <td style={{color:'#3FFF33'}}>₹{session.amountPaid}</td>
            </tr>
            <tr>
                <td>Days Subscribed:</td>
                <td>{session.daysSubscribed}</td>
            </tr>
            <tr>
                <td>Plan:</td>
                <td>{getPlanName(session.daysSubscribed)}</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}
