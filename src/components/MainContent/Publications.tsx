import { FC, useEffect, useState } from 'react';
import styled from "styled-components";
import Publication from './Publication';
import { NavLink } from 'react-router-dom';
// import {Colors} from '../../StyledHelpers/Colors';


const PublicationsWrapper = styled.div`
display: flex;
width: auto;
height: auto;
padding: 15px;
`;

const MainContentWrapper = styled.div`
display: flex;
flex-direction: column;
width: 93%; 
height: auto;
`;

const MainContentHeader = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
width: 100%;
`;


const PublicationsInner = styled.div`
display: flex;
width: auto;
height: auto;
box-shadow: 0px 2px 3px #999;
& > img {
    width: 350px;
    height: 350px;
}
& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: white;
    width: 100%;
    & > .publicStyle {
    width: 95%;
    height: 20px;
    text-align: left;
    margin-top: 5px;
    justify-content: center;
    font-family: Helvetica;
    font-weight: bold;
    color: #5353cc;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    }
    & > .h1Style {
    width: 95%;
    height: 20px;
    text-align: left;
    justify-content: center;
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    }
}
`;

// const LeftImage = styled.div`
// background-image: url("/assets/photos/skyscraper.jpg");
// display: flex;
// background-size: 350px 350px;
// box-shadow: inset 0px -174px 69px -41px #000c4499;
// & > p {
//     margin-left: 10px;
//     margin-right: 45px;
//     color: whitesmoke;
// }
// `;



// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then(response => response.json())
//   .then(json => console.log(json))




export const Publications: FC = () => {

    // const [apiPub, setApi] = useState<Publication>()
    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/posts/6")
    //     .then(res=>res.json())
    //     .then(json=>setApi(json))
    //  }, [])


    return (
            <PublicationsWrapper>
                <MainContentWrapper>
                    <MainContentHeader>
                        <PublicationsInner>
                            <img src="/assets/photos/skyscraper.jpg" alt="32132"></img>
                            {/* <LeftImage><p>{apiPub?.body}</p></LeftImage> */}
                            <div>
                                <NavLink to="/routingsite" className="h1Style"><h1>Latest publications</h1></NavLink>
                                <Publication />
                                <NavLink to="/routingsite" className="publicStyle"><span>See more publications</span></NavLink>
                            </div>
                        </PublicationsInner>
                    </MainContentHeader>
                </MainContentWrapper>
            </PublicationsWrapper>
    );
};
export default Publications;