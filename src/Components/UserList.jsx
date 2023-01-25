import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './UserList.css';
 
export default function UserList() {
 
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
 
    function getUsers() {
        axios.get('http://localhost:8080/react/api/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
 
    const deleteUser = (id) => {
        axios.delete(`http://localhost:8080/react/api/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div className="row">
            <div className="col-12">
            <h1>List Students</h1>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>kontak</th>
                        <th>pilihan</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} className="btn btn-success" style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )}
                     
                </tbody>
            </table>
            </div>
        </div>
    )
}