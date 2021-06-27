import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import {Colors} from '../../StyledHelpers/Colors';

const EntitiesData = [
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
    {
        title: "ABC Generic Company",
        adress: "Caracas  1050, Distrito Capital",
        country: "Venezuela"

    },
];

type PhotosType = {
    url: string;
}


const MainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 850px;
height: auto;
`;

const EntitiesWrapper = styled.div`
display: grid;
margin-top: 50px;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
width: auto;
height: auto;
justify-content: center;
background-color: ${Colors.nicebuttonhover};
& > div {
    width: auto;
    border: solid;
    border-width: 1px;
    justify-content: center;
    align-items: center;
}
`;

const EntitiesDiv = styled.div`
display: flex;
width: auto;
height: auto;
gap: 10px;
margin: 5px;
justify-content: center;
align-items: center;
text-align: center;
`;

const ApiImage = styled.div`
height: auto;
width: auto;
& > img {
    height: 70px;
    width: 70px;
}
`;

const FilterMenu = styled.div`
display: flex;
width: 100%;
height: auto;
justify-content: center;
& > p {
    text-align: center;
    font-size: 20px;
}
& > div {

}
`;


export const Entities: FC = () => {

    const [apiPhotos, setApiPhotos] = useState<PhotosType>()
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos/1")
            .then(res => res.json())
            .then(json => setApiPhotos(json))
            .then(json => console.log(json))
    }, [])

    return (
        <MainWrapper>
            <FilterMenu>
                <div>
                    <p>asdsadsa</p>
                </div>
            </FilterMenu>
            <EntitiesWrapper>
                {EntitiesData.map((item, index) =>
                    <div key={index}>
                        <EntitiesDiv>
                            <ApiImage><img src={apiPhotos?.url} alt=""></img></ApiImage>
                            {item.title},
                            {item.adress},
                            {item.country}
                        </EntitiesDiv>
                    </div>)}
            </EntitiesWrapper>
        </MainWrapper>
    );
};

export default Entities;