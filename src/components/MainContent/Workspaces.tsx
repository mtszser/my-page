import { FC } from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'
import Workspace from '../MainContent/Workspace';
import { NavLink } from "react-router-dom";


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  & > .headerStyle {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-left: 25px;
    text-decoration: none;
}
`;




export const Workspaces: FC = () => {
    return (

      <Wrapper>
        <NavLink to="/workspaces" className="headerStyle"><h1>Workspaces</h1></NavLink>
      <Carousel isRTL={false} itemsToShow={4} showArrows={false} itemPosition={"START"} pagination={true}>
        <Workspace>1</Workspace>
        <Workspace>2</Workspace>
        <Workspace>3</Workspace>
        <Workspace>4</Workspace>
        <Workspace>5</Workspace>
        <Workspace>6</Workspace>
        
      </Carousel>
    </Wrapper>



      // <>
      //   <WorkspacesWrapper>
      //       <MainContentWrapper>
      //           <WorkspacesHeader>
      //               <HeaderDiv>
      //               <h1>Workspaces</h1>
      //               </HeaderDiv>
      //           </WorkspacesHeader>
      //           <PublicationsDiv>

      //           </PublicationsDiv>
      //       </MainContentWrapper>
      //   </WorkspacesWrapper>
      // </>
    );
  };
  export default Workspaces;