import { FC } from 'react';
import styled from 'styled-components'


const MainWrapper = styled.div`
display: flex;
width: 100%;
height: 800px;
margin-right: 20px;
margin-top: 20px;
background-color: red;
`;

const ProfileWrapper = styled.div`
display: flex;
justify-content: center;
width: 80%;
margin: auto;
height: auto;
background-color: white;
`;


export const Profile: FC = () => {
    return (
        <MainWrapper>
            <ProfileWrapper>
        <p>hashdahdhahdsa</p>
            </ProfileWrapper>
        </MainWrapper>
    );
};

export default Profile;