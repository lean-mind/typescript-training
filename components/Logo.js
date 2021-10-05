import React from 'react'
import styled from "styled-components";
import isotype from '../assets/leanmind-isotipo.svg'
import anagram from '../assets/leanmind-anagrama.svg'

const LogoStyle = styled.div`
    align-items: center;
    bottom: 16px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 24px;
    width: 200px;
    z-index: 1;

    .isotype {
        width: 80px;
    }

    .anagram {
        padding-top: 17px;
        width: 110px;
    }
`

export const Logo = () => (
    <LogoStyle>
        <img className="isotype" src={isotype} alt="Lean Mind Isotype" />
        <img className="anagram" src={anagram} alt="Lean Mind Anagram" />
    </LogoStyle>
)