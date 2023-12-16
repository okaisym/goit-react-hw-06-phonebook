import styled from '@emotion/styled'

export const DeleteBtn = styled.button`
  padding: 5px 10px;
  background-color: #6495ed;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #3367d6;
    box-shadow: 0 0 10px #fff;
  }
  &:active {
    background-color: #2a56c8;
    box-shadow: 0 0 10px #fff;
  }
  font-weight: 700;
  margin-left: auto; 
  display: flex;
  justify-content: space-between;
`

export const ListItem = styled.li`
  color: white;
  font-weight: 600;
  list-style: none;
  &:before {
    content: '•';
    color: #6495ed;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  display: flex;
  justify-content: space-between; 
  list-style: none;
  margin: 10px;
  > span {
    margin-right: 20px; 
  }
`;