import { FC, useState } from 'react'
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';

const ResumeMenuContainer = styled.div`
display: flex;
z-index: 2;
flex-direction: column;
justify-content: center;
align-items: center;
border-style: solid;
border-width: 0px 1px 1px 1px;
border-color: #999;
position: absolute;
background-color: ${Colors.niceblue};
height: auto;
width: 150px;
`;

export const ResumeWorkMenu: FC = () => {
  
    return (
        <>
        <ResumeMenuContainer onClick={(e) => e.stopPropagation()}>
            <h1>dadsadsa</h1>
            <p>TestMenu</p>
        </ResumeMenuContainer>
        </>
      
    );
  };
  export default ResumeWorkMenu;