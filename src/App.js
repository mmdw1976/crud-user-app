import React, { useState } from 'react';
import UserForm from './components/tables/UserForm';
import EditForm from './components/tables/EditForm';

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

  // setup initialFormstate
  const initialFormState = {
    id: null, name: '', username: ''
  }

  // current user data
  const [currentUser, setCurrentUser] = useState(initialFormState);


  const [users, setUsers] = useState(userData);

  const [editing, setEditing] = useState(false);


  const addUser = user => {
    // because the id is counting on the previous state you must make use of prevState manner to avoid unexpected behaviour
    setUsers((prevState) => {
      return [...prevState, { ...user, id: prevState.length + 1 }];
    })
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  // when user clicks on edit we need to activate edit mode
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  // setup update user
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers.map(users.map(user => {
      return user.id === id ? updatedUser : user;
    }))
  }

  return (
    <div className="container">
      <h1>Crud with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          {editing ? (
            <EditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          )
            :
            (
              <UserForm addUser={addUser} />
            )
          }
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
