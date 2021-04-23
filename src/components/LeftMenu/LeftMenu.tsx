import React from 'react';
import { FC } from 'react'
import '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';

// const LeftMenuData = [
//     {
//       title: "Publications",
//       path: "#",
//       icone: `${process.env.PUBLIC_URL} /assets/icons/publications.svg`,
//       cName: "aside-text",
//     },
//     {
//       title: "Ecosystem",
//       path: "#",
//       icone: `${process.env.PUBLIC_URL} /assets/icons/ecosystem.svg`,
//       cName: "aside-text",
//     },
//     {
//       title: "Entities",
//       path: "#",
//       icone: `${process.env.PUBLIC_URL} /assets/icons/entities2.svg`,
//       cName: "aside-text",
//     },
// ];

const LeftMenuWrapper = styled.div`
width: 15%;
height: auto;
margin: 10px;
background-color: ${Colors.white};
box-shadow: 0px 2px 3px #999;
  z-index: 999;
`;

const LeftInnerWrapper = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
@media (min-width: 768px) {
  display: flex;
  width: 100%;
  height: auto;
}
`;

const LeftUpperSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
justify-content: center;
align-items: center;
background-color: white;
& > img {
  margin: 10px;
  width: 33%;
  height: auto;
  border-radius: 50%;
}
& > h1 {
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  font-family: Helvetica;
  color: #5353cc;
}
& > p {
  text-align: center;
  font-family: Helvetica;
  color: #c9c9c9;
  font-size: 10px;
  margin-bottom: 5px;
}
`;

const LeftLowerSection = styled.div`
display: flex;
flex-direction: inherit;
height: auto;
width: auto;
background-color: white;
justify-content: center;
align-items: center;
border-top: solid;
border-color: #999;
border-width: 1px;
& > label {
  text-align: center;
  font-family: Helvetica;
  color: #302f2f;
  font-size: 10px;
  margin-bottom: 5px;
}
`;



export const LeftMenu: FC = () => {
    return (
        <>
        <LeftMenuWrapper>
          <LeftInnerWrapper>
            <LeftUpperSection>
              <img src={process.env.PUBLIC_URL + "/assets/Profilowe.png"} alt=""/>
              <h1>Mateusz Serafin</h1>
              <p>Trener Personalny - My Fitness Place</p>
            </LeftUpperSection>
            <LeftLowerSection>
            <img src={process.env.PUBLIC_URL + "/assets/icons/network.png"} alt=""/>
            <label>Your network</label>
            <img src={process.env.PUBLIC_URL + "/assets/icons/network.png"} alt=""/>
            <label>Your Publications</label>
            
            </LeftLowerSection>
          </LeftInnerWrapper> 
        </LeftMenuWrapper>
        </> 
      );
    };
export default LeftMenu;