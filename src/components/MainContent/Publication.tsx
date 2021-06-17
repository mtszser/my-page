import { FC, useEffect, useState } from 'react';
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

type Publication = {
    userId: number;
    id: number;
    body: string;
    title: string;
}




export const Publication: FC = () => {

    const [apiPub, setApi] = useState<Publication>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/6")
        .then(res=>res.json())
        .then(json=>setApi(json))
     }, [])

     const [apiPub1, setApi1] = useState<Publication>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/9")
        .then(res=>res.json())
        .then(json=>setApi1(json))
     }, [])

     const [apiPub2, setApi2] = useState<Publication>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(res=>res.json())
        .then(json=>setApi2(json))
     }, [])




    return (
      <>
                <PublicationsContent>
                    <ContentDIV>
                        <img src='/assets/photos/guywriting.jpg' alt="guy"></img>
                        <AuthorDataProfile>
                            <h1>{apiPub?.body}</h1>
                            <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/assets/photos/JohnDoe.jpg' alt="guy"></img>
                                <span>John Doe</span>
                            </AuthorData>
                        </AuthorDataProfile>
                    </ContentDIV>
                    <ContentDIV>
                        <img src='/assets/photos/guywriting.jpg' alt="guy"></img>
                        <AuthorDataProfile>
                            <h1>{apiPub1?.body}</h1>
                            <AuthorData>
                                <p>7 jan. 2020</p>
                                <img src='/assets/photos/JohnDoe.jpg' alt="guy"></img>
                                <span>John Doe</span>
                            </AuthorData>
                        </AuthorDataProfile>
                    </ContentDIV>
                    <ContentDIV>
                        <img src='/assets/photos/guywriting.jpg' alt="guy"></img>
                        <AuthorDataProfile>
                            <h1>{apiPub2?.body}</h1>
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