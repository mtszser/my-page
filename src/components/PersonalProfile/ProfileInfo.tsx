import { FC, useEffect, useState } from "react";
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
justify-content: space-between;
align-items: center;
width: 100%;
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
height: auto;
`;
const ProfileDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 15%;
height: auto;
align-items: center;
text-align: center;
margin-left: 10px;
& > img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
}
& > a {
    text-decoration: none;
    font-size: 15px;
    color: black;
    margin-top: 10px;
}
`;

const ProfileName = styled.div`
display: flex;
flex-direction: column;
width: 100px;
height: auto;
& > span {
    font-size: 15px;
    margin-top: 5px;
}
`;

type addressType = {
    city: string;
    street: string;
    suite: string;
}

type CompanyType = {
    name: string;
} 

type UserProfileType = {
    id: number;
    email: string;
    phone: string;
    name: string;
    body: string;
    address: addressType;
    company: CompanyType;
}

const ContactUserDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 64%;
height: auto;
& > span {
    font-size: 15px;
}
`;

const EditButton = styled.div`
& > img {
    height: 15px;
    width: 15px;
    cursor: pointer;
    margin-top: 10px;
}
`;






export const ProfileInfo: FC = () => {

    const [apiUserInfo, setApiUserInfo] = useState<UserProfileType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res=>res.json())
        .then(json=>setApiUserInfo(json))
        .then(json => console.log(json))
     }, [])

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
            <ProfileName>
                      <span>{apiUserInfo?.name}</span>
                      <span>{apiUserInfo?.company.name}</span>
                      <span>{apiUserInfo?.address.city}</span>
                      <span>{apiUserInfo?.address.street}</span>
            </ProfileName>
            <ContactUserDiv>
                <span>{apiUserInfo?.email}</span>
                <span>{apiUserInfo?.phone}</span>
            </ContactUserDiv>
            <EditButton><img src="./assets/icons/pencil.png" alt=""></img></EditButton>

            </UserInfo>

        </>
    )
}
export default ProfileInfo;