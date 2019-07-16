import React, { useState } from 'react';
import TeamMemberList from './components/TeamMemberList'
import Form from "./components/Form"
import styled from 'styled-components'


function App() {
  const [members, setMembers] = useState([])
  const [update, setUpdate] = useState({})
  const [isUpdating, setIsUpdating] = useState(false)

  return (
    <div className="App">
      <Header>Welcome to the Jungle</Header>
      <Form setMembers={setMembers} members={members} update={update} isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
      <TeamMemberList members={members} setUpdate={setUpdate} setIsUpdating={setIsUpdating} />
    </div>
  );
}

export default App;


const Header = styled.h1`
  font-size: 70px;
  text-align: center;
`;
