import React, { useState } from 'react';

import UserTable from './components/tables/UserTable';

function App() {

  const userData = [
    {
      id: 1,
      name: 'Jay',
      userName: 'Floppydisk'
    }, {
      id: 2,
      name: 'Craig',
      userName: 'SiliconIdol'
    },
    {
      id: 3,
      name: 'Ben',
      userName: 'Benisphere'
    }
  ]

  const [users, setUsers] = useState(userData);

  return (
    <div className="container">
      <h1>Crud with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
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
