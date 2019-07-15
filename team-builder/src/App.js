import React from "react";
import styled from "styled-components";
import teamForm from "./Components/teamForm"

function App() {
  return (
    <div className="App">
      <Header>This Is My Team!</Header>
      <teamForm />
    </div>
  );
}

export default App;

const Header = styled.h1`
  font-size: 70px;
  text-align: center;
`;
