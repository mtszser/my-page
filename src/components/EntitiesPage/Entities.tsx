import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

const EntitiesData = [
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        img: "/",
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    }
];

type PhotosType = {
    url: string;
}


const EntitiesWrapper = styled.div`
display: flex;
margin-top: 15px;
width: 60%;
height: 600px;
justify-content: center;
background-color: wheat;
`;


const EntitiesGrid = styled.div`
display: flex;
width: auto;
height: auto;
background-color: red;
`;

const EntitiesDiv = styled.div`
display: grid;
width: 150px;
height: 150px;
gap: 10px;
margin: 5px;
border: solid;
border-width: 1px;
justify-content: center;
align-items: center;
text-align: center;
`;

export const Entities: FC = () => {

    const [apiPhotos, setApiPhotos] = useState<PhotosType>()
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/photos/1")
        .then(res=>res.json())
        .then(json=>setApiPhotos(json))
        .then(json => console.log(json))
     }, [])
     
    return (
        <EntitiesWrapper>
            <EntitiesGrid>
                {EntitiesData.map((item, index) =>
                    <div key={index}>
                        <div>
                            <img src={item.img} alt=""></img>
                            <EntitiesDiv>
                                {item.title},
                                {item.adress},
                                {item.country}
                            </EntitiesDiv>
                        </div>
                    </div>)}
            </EntitiesGrid>
        </EntitiesWrapper>
    );
};

export default Entities;