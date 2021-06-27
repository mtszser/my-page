import { FC } from 'react';
import styled from 'styled-components'
import ProfileInfo from './ProfileInfo';


const MainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: auto;
margin-right: 20px;
margin-top: 20px;
`;
    
const ProfileWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 45%;
margin: auto;
height: auto;
background-color: white;
`;

const ProfileNav = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 300px;
align-items: center;
justify-content: space-around;
background-color: blue;
`;

const ProfileNavWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: right;
width: 95%;
height: 95%;
background-color: wheat;
`;


const ProfileNavButtons = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 10px;
height: auto;
justify-content: flex-end;
background-color: white;
align-items: center;
text-align: center;
`;


const PanelInformations = styled.div`
display: flex;
width: 100%;
height: 200px;
background-color: orange;
`;

const Proposals = styled.div`
display: flex;
width: 100%;
height: 200px;
background-color: green;
`;

const InternalRevievs = styled.div`
display: flex;
width: 100%;
height: 200px;
background-color: yellow;
`;

const AmountOfFees = styled.div`
display: flex;
width: 100%;
height: 200px;
background-color: blue;
`;

// const ProfileInfo = styled.div`

// `;


export const Profile: FC = () => {
    return (
        <MainWrapper>
            <ProfileWrapper>
                    <ProfileNav>
                        <ProfileNavWrapper>
                        <ProfileNavButtons>
                            <ProfileInfo></ProfileInfo>
                        </ProfileNavButtons>
                        </ProfileNavWrapper>
                    </ProfileNav>
                    <PanelInformations>
                    <p>Panel Informations</p>
                    </PanelInformations>
                    <Proposals>
                    <p>Proposals</p>
                    </Proposals>
                    <InternalRevievs>
                        <p>Internal Revievs</p>
                    </InternalRevievs>
                    <AmountOfFees>
                        <p>Amount of Fees</p>
                    </AmountOfFees>
            </ProfileWrapper>
        </MainWrapper>
    );
};

export default Profile;