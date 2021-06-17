import { FC } from 'react';
import Publications from '../MainContent/Publications';
import Workspaces from '../MainContent/Workspaces';
import ResumeWork from '../MainContent/ResumeWorks';
import styled from 'styled-components'

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
`;

const MainContent: FC = () => {


    return (
        <>
            <MainContentWrapper>
                <Publications />
                <Workspaces />
                <ResumeWork />
            </MainContentWrapper>
        </>

    )
}

export default MainContent;