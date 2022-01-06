import styled from 'styled-components';

export const CardContainerStyled = styled.div`
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 3px 4px -2px rgba(0,0,0,0.4);
  background-color: ${props => props.color};
`

export const CardMessageStyled = styled.div`
  height: 35px;
  font-weight: 500;
`

export const CardButtonContainerStyled = styled.div`
  display: flex;
  justify-content: end;
`

export const ClearButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`