import React from 'react';

const UserTable = () => {
    return (
        <table>
            <thead className="table-head">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name Data</td>
                    <td>Username data</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserTable;