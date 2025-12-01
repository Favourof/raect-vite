import React, { useContext } from 'react'
import { UserContext } from '../Context/context'
import { Link, useNavigate } from 'react-router-dom';

export default function Profile() {
    // const [userData, setUserData] = useState("")
    const { user } = useContext(UserContext)
    const navigate = useNavigate();

    console.log(user);

    return (
        <>
            <div> profile </div>
            <button onClick={() => navigate("/settings")}>settings</button>
        </>



    )
}
