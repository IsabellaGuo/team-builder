import React, { useState } from "react"; 

const TeamForm = props => {
    const [Teammember, setTeamMember] = useState({
        Username: "",
        email: ""
    });

    const handleChanges = event => {
        setTeamMember({ ...Teammember, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewPerson(Teammember);
        setTeamMember({ Username: "", email: ""});
    };

    return(
        <form onSubmit={submitForm}>
             <label htmlFor= 'Username'>Username</label>
                <input 
                id= "Username"
                type="text"
                name="Username"
                placeholder="Username"
                onChange={handleChanges}
                value={Teammember.Username}/>
            <label htmlFor= "email">Email</label>
                <input
                id= "email"
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChanges}
                value={Teammember.email}/>
            <label htmlFor= "role">Role</label>
                <input
                id= "role"
                type="text"
                name="role"
                placeholder="role"
                onChange={handleChanges}
                value={Teammember.email}/>
        
            <button type='submit'>Add</button>
        
        </form>

    );
}
export default TeamForm;