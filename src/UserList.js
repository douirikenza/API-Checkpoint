// src/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-header" >User List</h2>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>{user.name} <br/> Email:{user.email} <br/> Phone:{user.phone} <br/><br/></li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
