import { FC } from 'react';
import styled from 'styled-components'


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
width: 100%;
height: auto;
justify-content: space-around;
background-color: blue;
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