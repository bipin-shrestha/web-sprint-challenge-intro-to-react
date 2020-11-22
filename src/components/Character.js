// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const Button = styled.button `
  background-color: black;
  width: 80%;
  height: 4rem;
  color: crimson;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  opacity: 0.8;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: crimson;
    color: black;
    font-weight: bold;
  }
  `
  const SubButton = styled.button `
  background-color: #FFEFBF;
  width: 80%;  
  color: black;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  opacity: 0.8;
  font-weight: bold;
  }
  `
const toggle = (collapse, setCollapse) =>{
  setCollapse(!collapse);
}
const Character = (props) =>{
  const [collapse,setCollapse]= useState(false);
  const character = props.character;
    return(
      <div>
        <Button onClick={()=>toggle(collapse,setCollapse)}>{character.name}</Button>
        {collapse?
        <SubButton>  <div>
            <p>Birth-Year : {character.birth_year}</p>
            <p>Eye-color :  {character.eye_color}</p>
            <p>Gender :  {character.gender}</p>
            <p>Hair-Color :  {character.hair_color}</p>
            <p>Height :   {character.height}</p>
            <p>Mass :  {character.mass}</p>
          </div></SubButton>
          : null
        }
      </div>
    );
};
export default Character;