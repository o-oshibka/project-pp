import React, { useState, useEffect } from 'react';
import './Users.css';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loadUsers = () => {
            try {
                setUsers([
                  { "id": 1, "username": "oshibka", "email": "oshibka@example.com" },
                  { "id": 2, "username": "eclipse", "email": "eclipse@example.com" },
                  { "id": 3, "username": "weow_weow", "email": "weow.weow@example.com" }
                ]);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
                console.error('Ошибка при загрузке данных о пользователях');
            }
        };

        loadUsers();
    }, []);


    if (loading) {
        return <div>Загрузка списка пользователей...</div>;
    }

    if (error) {
        return <div>Ошибка при загрузке пользователей</div>;
    }

    return (
        <div className="users-container">
            <h1>Список пользователей</h1>
            <table className="users-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Имя пользователя</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
