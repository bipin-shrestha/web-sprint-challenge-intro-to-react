// Write your Character component here
import React from 'react';
import Styled from 'styled-components';

const Character = (props) => {
const {character} = props;
    return (
    <div>{character.name}</div>
    );
}
export default Character;