import React, {useState} from 'react'

const UserForm = (props) => {
    const initialFormState = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setUser(
            {...user, [name]: value}
        )
    }

    const submitHandler = (e) => {
        console.log('from form');
        console.log(user)
        e.preventDefault();
        props.addUser(user);
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
            <br />
            <div>
                <button>submit</button>
            </div>
        </form>
     );
}
 
export default UserForm;