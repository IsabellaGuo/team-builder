import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import TeamForm from './Components/TeamForm';
import Team from './Components/Team';

function App() {
  const [team, setTeam] = useState ([
    {
    Username: "Isabella",
    email: "isabella.mozart@gmail.com",
    role: "Lambda student"
    }
  ]);

  const addNewMember = Teammember => {
    const newTeamMember = {
      id: Date.now(),
      name: Teammember.Username,
      email: Teammember.email,
      role: Teammember.role
    }
    setTeam([...team, newTeamMember]);
    
  }
  return (
    <div className="App">
       <h1>Team List</h1>
       <TeamForm addNewMember = {addNewMember} />
       <Team team = {team} />
    </div>
  );
}

export default App;
