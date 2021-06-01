import { FC } from "react";
import styled from "styled-components";


const ResumeWorkWrapper = styled.div`
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
gap: 10px;
`;

const ResumeWorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 15px;
}
`;

// const FilterFollowerDiv = styled.div`
// display: flex;  
// width: 80%;
// height: auto;
// `;

const ResumeWorkDiv = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
background-color: white;
box-shadow: 0px 2px 3px #999;
`;

const WorkHeader = styled.div`
width: 20%;
height: auto;
& > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #5353cc;
    font-size: 15px;
    padding: 8px;
    margin-left: 7px;

}
`;

const WorkContent = styled.div`
height: auto;
& > p {
    font-family: Helvetica;
    color: #4d4d4d;
    font-size: 13px;
    margin-left: 15px;
    line-height: 1.5;
}
`;

const WorkAuthors = styled.div`
display: flex;
flex-direction: row;
width: 60%;
height: auto;
margin-left: 15px;
padding: 5px;
align-items: center;
& > #dot {
    width: 3px;
    margin-left: 15px;
    margin-right: 15px;
}
& > img {
    width: 15px;
    
}
& > p {
    font-size: 11px;
    font-family: Helvetica;
    color: #4d4d4d;
    margin-left: 10px;
}
& > span {
    font-size: 11px;
    font-family: Helvetica;
    color: #7a7a7a;
}

`;




export const ResumeWork: FC = () => {
    return (
      <>
        <ResumeWorkWrapper>
            <MainContentWrapper>
                <ResumeWorkHeader>
                    <h1>Resume your work</h1>
                </ResumeWorkHeader>
                <ResumeWorkDiv>
                    <WorkHeader>
                        {/* Title props */}
                        <h1>World Company SAS</h1>
                    </WorkHeader>
                    <WorkContent>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Curabitur ut aliquet ipsum, eget rhoncus ex. Ut vel 
                            tellus feugiat, consequat tortor in, posuere elit.
                            Suspendisse non placerat orci. Donec consectetur feugiat odio,
                             at tristique purus lobortis vitae.</p>
                    </WorkContent>
                    <WorkAuthors>
                    <img src='/assets/icons/podcast.svg' alt="podcast"></img>
                    <p>Subsid. corp.</p>
                    <img id="dot" src='/assets/icons/dot.svg' alt="dot"></img>
                    <img src='/assets/icons/entities.svg' alt="podcast"></img>
                    <p>Corporate</p>
                    <img id="dot" src='/assets/icons/dot.svg' alt="dot"></img>
                    <span>Updated 3 days ago by John Doe</span>
                    </WorkAuthors>
                    </ResumeWorkDiv>
            </MainContentWrapper>
        </ResumeWorkWrapper>
      </>
    );
  };
  export default ResumeWork;