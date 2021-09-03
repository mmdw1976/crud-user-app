import React, { useState } from 'react'

const EditForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUser({ ...user, [name]: value });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        //update user
        props.updateUser(user.id, user)
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
            </div>
            <div className="button-container">
                <button
                    onClick={() => props.setEditing(false)}
                >Cancel</button>
                <button>Update user</button>
            </div>
        </form>
    );
}

export default EditForm;