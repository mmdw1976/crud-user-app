import React, {useState} from 'react'

const UserForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('')

    const submitHandler = () => {
        console.log({name, username})
    }
    return ( 
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <br />
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="username">Username</label>
                <br />
                <input type="text" name="username" id="username" />
            </div>
        </form>
     );
}
 
export default UserForm;