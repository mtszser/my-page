import { FC } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import TopBar from '../TopBar/TopBar';
import {Colors} from '../../StyledHelpers/Colors';
import Workspace from '../Workspace/Workspace';
  



const Main = styled.div`
background-color: ${Colors.mainbackground};
width: 100%;
height: auto;
`;

const MainWrapper = styled.div`
display: flex;
flex-direction: row;
width: auto;
height: auto;
`;




const MainPage: FC = () => {
    

    return (
        <>
        <Main>
            <TopBar/>
            <MainWrapper>
            <LeftMenu/>
            <Workspace/>
            </MainWrapper>
        </Main>
        </>
        
    )
}

export default MainPage
