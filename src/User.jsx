import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
    const[users, setUsers] = useState([]);
    const getUser = () => {
        axios.get('http://localhost:8080/api/bank/user/all').then(res => setUsers(res.data))
    }

    useEffect(
        () => {
            getUser()
        }, []
    )
    return (
        <div className="mt-4  d-flex justify-content-center"> 
        <ul className="list-group">
            <h4>Liste des utilisateurs</h4>
            {users.map(user =>( <li className="list-group-item" key = {user.id}> {user.nom}-{user.dateNaiss}</li>))}   
        </ul>
        
         </div>
        
    )
}

export default User
