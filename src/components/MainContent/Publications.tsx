import { FC } from "react";
import styled from "styled-components";
import Publication from './Publication';
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
width: 100%;
height: auto;
box-shadow: 0px 2px 3px #999;
& > img {
    width: 320px;
    height: 320px;
    position: relative;
    box-shadow: inset 2px 2px 12px black;
}
& > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 320px;
    background-color: white;
    width: 100%;
    & > span {
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
    }
    & > h1 {
    width: 95%;
    height: 20px;
    text-align: left;
    justify-content: center;
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 16px;
    cursor: pointer;
    }
}
`;

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))




export const Publications: FC = () => {
    return (
        <>
            <PublicationsWrapper>
                <MainContentWrapper>
                    <MainContentHeader>
                        <PublicationsInner>
                            <img src='/assets/photos/skyscraper.jpg' alt='skyscraper'></img>
                            <div>
                                <h1>Latest publications</h1>
                                <Publication />
                                <Publication />
                                <Publication />
                                <span>See more publications</span>
                            </div>
                        </PublicationsInner>
                    </MainContentHeader>
                </MainContentWrapper>
            </PublicationsWrapper>
        </>
    );
};
export default Publications;