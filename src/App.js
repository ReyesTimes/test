
import React, { useState } from 'react';
import styled from 'styled-components';

// C O M P O N E N T S
import Form from './components/Form.js';
import Instruction from './components/Instruction.js';
import Issues from './components/Issues.js';

const Main = styled.main`
  padding: 20px;
  width: 780px;
  margin: 0 auto;
`;

const ResultText = styled.p`
  font-style: italic;
`;


function App() {
  const [list, setList] = useState([]);
  const [loading, isLoading] = useState(false);
  const [withData, setWithData] = useState(false);

  function addToList(list) {
    setList([...list]);
  }

  return (
    <Main className="App">
      <Instruction />
      <Form addToList={addToList} isLoading={isLoading} setWithData={setWithData}/>
      {!loading && withData && list.length > 0 && <ResultText>Resultados: {list.length}</ResultText> }
      {!loading && withData && !list.length && <div>No hay resultados</div> }
      {loading ? 'cargando' : <Issues list={list}/>}
    </Main>
  );
}

export default App;
