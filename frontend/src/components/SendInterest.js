import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SendInterest = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/')
            .then(response => setUsers(response.data))
            .catch(error => console.error(error));
    }, []);

    const sendInterest = async () => {
        try {
            await axios.post('http://localhost:8000/api/interests/', {
                sender: localStorage.getItem('userId'),
                receiver: selectedUser
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <select onChange={(e) => setSelectedUser(e.target.value)}>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.username}</option>
                ))}
            </select>
            <button onClick={sendInterest}>Send Interest</button>
        </div>
    );
};

export default SendInterest;
