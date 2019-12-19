import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';

function App() {
  const [team, setTeam] = useState ([{
    Username: "Isabella",
    email: "isabella.mozart@gmail.com",
    role: "Lambda student"
  }]);

  const addNewPerson = Teammember => {
    const newTeamMember = {
      id: Date.now(),
      name: Teammember.Username,
      email: Teammember.email,
      role: Teammember.role
    }
    const newmemberArray = [...team, newTeamMember];
    setTeam(newmemberArray);
  }
  return (
    <div className="App">
       <h1>Team List</h1>
       <TeamForm addNewPerson = {addNewPerson}/>
       <Team team={team} />
    </div>
  );
}

export default App;
