import React from 'react';
import { FC } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import TopBar from '../TopBar/TopBar';
// import PersonalCard from '../PersonalCard/PersonalCard';

const MainBackground = styled.div`
background-color: #f5f7f9;
width: auto;
height: 900px;
`;

const MainPage: FC = () => {
    

    return (
        <MainBackground>
        <>
            <TopBar/>
            {/* <PersonalCard/> */}
            <LeftMenu/>
        </>
        </MainBackground>
    )
}

export default MainPage
