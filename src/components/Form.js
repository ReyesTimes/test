import React from 'react';
import styled from 'styled-components';

// S E R V I C E S
import searchReq from '../services/search.js';

const Label = styled.label`
    display: block;
    font-weight: bold;
    font-size: 1.250rem;
    margin-bottom: .5rem;
`;

const Input = styled.input`
    padding: .5rem;
    border: 1px solid #a59696;
`;

const ContainerForm = styled.div`
    margin-bottom: 1rem;
`;

let timeoutID;
function Form({ addToList, isLoading, setWithData }) {
    function search(value = '') {
        isLoading(true);
        searchReq(value)
        .then(({ items }) => {
            addToList(items);
        })
        .finally(() => {
            isLoading(false);
            setWithData(true);
        })
    }

    function cancelDelay() {
        if(typeof timeoutID == "number") {
            window.clearTimeout(timeoutID);
            timeoutID = null;
        }
    }

    function delay(fn, value) {
        timeoutID = setTimeout(() => { fn(value); }, 1000);
    }
    
    function onChangeEvnt(e) {
        cancelDelay();
        delay(search, e.target.value);
    }
  
    return (
        <ContainerForm>
            <form>
                <Label htmlFor="search">Buscador <span aria-hidden="true">🤔</span></Label>
                <Input type="text" id="search" name="search" placeholder="Ej: issue+react" className="search" onChange={e => onChangeEvnt(e)} />
            </form>
        </ContainerForm>
    );
  }

export default Form;