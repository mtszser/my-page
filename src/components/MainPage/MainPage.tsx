import { FC } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import TopBar from '../TopBar/TopBar';
import {Colors} from '../../StyledHelpers/Colors';
import Publications from '../MainContent/Publications';
import Workspaces from '../MainContent/Workspaces';
import ResumeWork from '../MainContent/ResumeWorks';
  



const Main = styled.div`
background-color: ${Colors.mainbackground};
width: auto;
height: auto;
`;

const MainWrapper = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
`;

const MainContent = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
`;




const MainPage: FC = () => {
    

    return (
        <>
        <Main>
            <TopBar/>
            <MainWrapper>
            <LeftMenu/>
            <MainContent>
            <Publications/>
            <Workspaces/>
            <ResumeWork/>
            </MainContent>
            </MainWrapper>
        </Main>
        </>
        
    )
}

export default MainPage
