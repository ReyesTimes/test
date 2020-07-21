import React from 'react';
import styled from 'styled-components';

const Msg = styled.p`
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #03a9f412;
    border: 1px solid #03A9F4;
`;

const SpecialCharacter = styled.span`
  background-color: #3F51B5;
  font-style: italic;
  color: white;
  padding: 0px 4px 4px;
  padding-bottom: 4px;
`;

export default function() {
    return (
        <Msg>
          <span aria-hidden="true">🤓</span> Para buscar más de un parametro agrega el signo de <SpecialCharacter>+</SpecialCharacter>, ejemplo <SpecialCharacter>issue+react+bugg</SpecialCharacter>
        </Msg>
    );
}