import { FC, useEffect, useState } from 'react';
import styled from 'styled-components'


const LeftUpperSection = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: auto;
justify-content: center;
align-items: center;
background-color: white;
margin: 12px;
& > img {
  width: 25%;
  height: auto;
  border-radius: 50%;
}
& > p {
  text-align: center;
  font-family: Helvetica;
  color: #6d6d6d;
  font-weight: bold;
  font-size: 13px;
}
`;

const ProfileName = styled.div`
width: auto;
height: auto;
& > h1 {
  margin: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  font-family: Helvetica;
  color: #5353cc;
}
`;

type CompanyType = {
    name: string;
}

type UserProfileType = {
    id: number;
    name: string;
    body: string;
    company: CompanyType;
}


export const UserProfile: FC = () => {


    const [apiProfile, setApiProfile] = useState<UserProfileType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res=>res.json())
        .then(json=>setApiProfile(json))
        .then(json => console.log(json))
     }, [])

  
  return (
      <>
          <LeftUpperSection>
              <img src="/assets/Profilowe.png" alt="" />
              <ProfileName>
                  <h1>{apiProfile?.name}</h1>
              </ProfileName>
              <p>{apiProfile?.company.name}</p>
          </LeftUpperSection>

      </>
  );
};
export default UserProfile;