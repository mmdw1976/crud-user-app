import React, { useState } from 'react';
import UserForm from './components/tables/UserForm';

import UserTable from './components/tables/UserTable';

function App() {

  const userData = [
    {
      id: 1,
      name: 'Jay',
      username: 'Floppydisk'
    }, {
      id: 2,
      name: 'Craig',
      username: 'SiliconIdol'
    },
    {
      id: 3,
      name: 'Ben',
      username: 'Benisphere'
    }
  ]

  const [users, setUsers] = useState(userData);

  const addUser = user => {
    // because the id is counting on the previous state you must make use of prevState manner to avoid unexpected behaviour
    setUsers((prevState) => {
      return [...prevState, {...user, id: prevState.length + 1}];
    })
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div className="container">
      <h1>Crud with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <UserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
}

export default App;
