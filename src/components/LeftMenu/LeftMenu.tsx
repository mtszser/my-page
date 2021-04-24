import React from 'react';
import { FC } from 'react'
import '../LeftMenu/LeftMenu';
import styled from 'styled-components'
import {Colors} from '../../StyledHelpers/Colors';


const LeftWrapper = styled.div`
width: 15%;
height: 900px;
@media (min-width: 768px) {
  width: 20%;
  height: 900px; 
}

`;

const LeftMenuWrapper = styled.div`
width: 100%;
height: 400px;
margin: 10px;
background-color: ${Colors.white};
box-shadow: 0px 2px 3px #999;
  z-index: 999;
@media (min-width: 768px) {
  width: 85%;
  height: auto; 
}
`;

const LeftInnerWrapper = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
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
& > p {
  text-align: center;
  font-family: Helvetica;
  color: #c9c9c9;
  font-size: 10px;
  margin-bottom: 5px;
}
`;

const ProfileName = styled.div`
width: auto;
height: auto;
& > h1 {
  margin-bottom: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  font-family: Helvetica;
  color: #5353cc;
}
`;

const LeftLowerSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
padding: 5px;
background-color: white;
justify-content: center;
align-items: center;
border-top: solid;
border-color: #999;
border-width: 1px;
`;

const LeftLowerInner = styled.div`
display: flex;
width: 100%;
align-items: center;
& > img {
  float: right;
}
`;


const LeftLowerImage = styled.div`
display: flex;
& > img {
}
`;

const LeftLowerDiv = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
& > label {
  text-align: center;
  font-family: Helvetica;
  color: #4d4d4d;
  font-size: 13px;
  margin-left: 15px;
}

`;



export const LeftMenu: FC = () => {
    return (
        <>
        <LeftWrapper>
        <LeftMenuWrapper>
          <LeftInnerWrapper>
            <LeftUpperSection>
              <img src={process.env.PUBLIC_URL + "/assets/Profilowe.png"} alt=""/>
              <ProfileName>
              <h1>Mateusz Serafin</h1>
              </ProfileName>
              <p>Trener Personalny - My Fitness Place</p>
            </LeftUpperSection>
            <LeftLowerSection>
              <LeftLowerInner>
                <LeftLowerDiv>
              <img src={process.env.PUBLIC_URL + "/assets/icons/network.png"} alt=""/>
              <label>Your network</label>
                </LeftLowerDiv>
                <LeftLowerImage>
                <img src={process.env.PUBLIC_URL + "/assets/icons/plus.png"} alt=""/>
                </LeftLowerImage>
              </LeftLowerInner>
              <LeftLowerInner>
                <LeftLowerDiv>
                <img src={process.env.PUBLIC_URL + "/assets/icons/network.png"} alt=""/>
                <label>Your Publications</label>
                </LeftLowerDiv>
                <LeftLowerImage>
                <img src={process.env.PUBLIC_URL + "/assets/icons/plus.png"} alt=""/>
                </LeftLowerImage>
              </LeftLowerInner>
            </LeftLowerSection>
          </LeftInnerWrapper> 
        </LeftMenuWrapper>
        </LeftWrapper>
        </> 
      );
    };
export default LeftMenu;