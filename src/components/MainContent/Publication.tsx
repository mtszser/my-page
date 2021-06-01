import { FC } from "react";
import styled from "styled-components";



const PublicationsContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
width: 100%;
height: auto;
align-items: center;
background-color: white;
`;


const ContentDIV = styled.div`
display: flex;
width: 95%;
padding: 5px;
height: auto;
& > img {
    width: 75px;
    height: 75px;
}
& > p {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.3;
}
`;

const  AuthorDataProfile = styled.div`
display: flex;
width: 100%;
height: auto;
flex-direction: column;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 15px;
    margin: 5px;
    line-height: 1.2;
}
`;

const AuthorData = styled.div`
display: flex;
align-items: center;
justify-content: left;
gap: 10px;
width: 100%;
height: auto;
margin-left: 5px;
& > img {
    height: 23px;
    width: 23px;
    border-radius: 30px;
}
& > p {
    font-size: 12px;
    font-weight: bold;
    color: #cac7c7;
    font-family: Helvetica;
}
& > span {
    font-size: 12px;
    font-weight: bold;
    color: #4d4d4d;;
}
`;




export const Publication: FC = () => {
    return (
      <>
                <PublicationsContent>
                    <ContentDIV>
                        <img src='/assets/photos/guywriting.jpg' alt="guy"></img>
                        <AuthorDataProfile>
                            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit... and one more line for the demo donna mamma es hueczita </h1>
                            <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/assets/photos/JohnDoe.jpg' alt="guy"></img>
                                <span>John Doe</span>
                            </AuthorData>
                        </AuthorDataProfile>
                    </ContentDIV>
                </PublicationsContent>
      </>
    );
  };
  export default Publication;