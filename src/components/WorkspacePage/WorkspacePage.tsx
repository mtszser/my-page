import { FC } from 'react'
import styled from 'styled-components'
import ResumeWorks from '../MainContent/ResumeWorks';


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 1%;
    margin-right: 3%;
    & > div {
    display: flex;
    justify-content: center;
}
`;
const InnerWrapper = styled.div`
display: flex;
height: 98%;
width: 100%;
flex-direction: column;
justify-content: center;
`;

const TopDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 300px;
justify-content: center;
align-items: center;
`;

const TopUpperDiv = styled.div`
display: flex;
width: 95%;
height: 200px;
background-image: url("/assets/photos/meeting.jpg");
background-size: cover;
justify-content: center;
`;

const TopLowerDiv = styled.div`
display: flex;
width: 95%;
height: 100px;
justify-content: center;
`;


export const WorkspacePage: FC = () => {

  return (
      <>
    <MainWrapper>
        <InnerWrapper>
            <TopDiv>
                <TopUpperDiv></TopUpperDiv>
                <TopLowerDiv></TopLowerDiv>   
            </TopDiv>
        </InnerWrapper>
        <ResumeWorks></ResumeWorks>
    </MainWrapper>
    </>
  );
};
export default WorkspacePage;