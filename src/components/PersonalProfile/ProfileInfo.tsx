import { FC } from "react";
import styled from 'styled-components'

const ProfileButtons = [
    {
        title: 'Message',
        icon: "./assets/icons/message.png",
        path: '/',
    },
    {
        title: 'Create a request',
        icon: "./assets/icons/request.png",
        path: '/',
    },
    {
        title: 'Add to a cluster',
        icon: "./assets/icons/cluster.png",
        path: '/',
    },
    {
        icon: "./assets/icons/close.png",
        path: '/'

    }
];


const NavDiv = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
width: 85%;
height: 30%;
& div > {
    display: flex;
    justify-content: center;
    align-items: center;
}
& div > a {
    font-size: 15px;
    text-align: center;
    align-items: center;
    text-decoration: none;
    color: black;  
}
& > div > a > img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    margin-left: 10px;
    align-items: center;
    text-align: center;
}
`;

const UserInfo = styled.div`
display: flex;
width: 100%;
height: 80px;
background-color: red;
`;
const ProfileDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: auto;
height: auto;
align-items: center;
text-align: center;
margin-left: 10px;
& > img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
& > a {
    text-decoration: none;
    font-size: 13px;
    color: black;
}
`;




export const ProfileInfo: FC = () => {
    return (
        <>
        <NavDiv>
            {ProfileButtons.map((item, index) =>
            <div key={index}>
                <a href={item.path}>
                    <img src={item.icon} alt="icons"></img>
                    <span>{item.title}</span>
                </a>
            </div>)}
        </NavDiv>
        <UserInfo>
            <ProfileDiv>
            <img src="./assets/profilowe.png" alt=""></img>
            <a href="/profile">See Profile</a>
            </ProfileDiv>
            <div>

            </div>
            </UserInfo>

        </>
    )
}
export default ProfileInfo;