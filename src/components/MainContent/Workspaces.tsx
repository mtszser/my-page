import { FC } from "react";
import styled from "styled-components";


const WorkspacesWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 15px;
`;

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 93%;
height: auto;
`;

const WorkspacesHeader = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
`;

const HeaderDiv = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 20px;
}
`;


const PublicationsDiv = styled.div`
display: flex;
width: auto;
height: 200px;
background-color: white;
`;




export const Workspaces: FC = () => {
    return (
      <>
        <WorkspacesWrapper>
            <MainContentWrapper>
                <WorkspacesHeader>
                    <HeaderDiv>
                    <h1>Workspaces</h1>
                    </HeaderDiv>
                </WorkspacesHeader>
                <PublicationsDiv>
                </PublicationsDiv>
                
            </MainContentWrapper>
        </WorkspacesWrapper>
      </>
    );
  };
  export default Workspaces;