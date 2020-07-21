import React from 'react';
import styled from 'styled-components';

const IssueContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const Issue = styled.li`
  max-height: 200px;
  overflow: hidden;
  border: 1px solid #b3b3b3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  margin-bottom: 1rem;
  padding: 1.5rem;
`;

export default function({ list }) {
  return (
    <IssueContainer>
      {list.map((issue, key) => {
        return (
        <Issue key={key}>
          {issue.body}
        </Issue>
        )
      })}
    </IssueContainer>
  );
}