import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


    const Register = () => {
        const [login, setLogin] = useState();
        const[password, setPassword] = useState();
        const navigate = useNavigate();
    
        function enregistrer(e) {
            e.preventDefault();
    
            if(login && password) {
                /* mettre la logique d'authentification de l'utilisateur */
                alert(`votre login est ${login}`)
    
                const data = {
                    login: login,
                    password :password
                }
                // appel de l'API de connexion de spring boot
                axios.post('http://localhost:8080/api/bank/user/save', data)
                    .then(res => {
                        console.log(res)
                        navigate('/')
                    }).catch(e => alert("Utilisateur inconnu"))
            } else {
                alert("Le login ou le mot de passe est vide")
            }
        }


    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="w-50 p-3 shadow">
                <h4>S'identifier</h4>
                <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} id="login" className="form-control" />
                </div>

                <div className="form-group mt-2">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" />
                </div>

                <button type="button" className="btn btn-success w-100 mt-4" onClick={enregistrer}>S'enregistrer</button>
            </div>
        </div>
    )
}

export default Register;