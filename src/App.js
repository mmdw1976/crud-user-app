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

  return (
    <div className="container">
      <h1>Crud with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <UserForm />
        </div>
        <div className="flex-large">
          <h2>View Users</h2>
          <UserTable users={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
