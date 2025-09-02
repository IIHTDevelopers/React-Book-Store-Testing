<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Username:</strong> {user.username} <br />
                        <strong>Role:</strong> {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUserList;
=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminUserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>Username:</strong> {user.username} <br />
                        <strong>Role:</strong> {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminUserList;
>>>>>>> d3a88dcbfb8f63e877cb54f6523e0c85f8f9af1c
