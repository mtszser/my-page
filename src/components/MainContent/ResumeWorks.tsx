import { FC, useState, useEffect } from "react";
import styled from "styled-components";
import useDropdown from 'react-dropdown-hook';
import ResumeWorkMenu from '../MainContent/ResumeWorkMenu'
// import {Colors} from '../../StyledHelpers/Colors';


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
display: flex;
width: 100%;
height: auto;
align-items: center;
& > div {
    display: flex;
    width: 60%;
    align-items: center;
    & > h1 {
    font-family: Helvetica;
    font-weight: bold;
    color: #4d4d4d;
    font-size: 18px;
    margin-left: 10px;
}
}
`;

const HeaderFilterDiv = styled.div`
display: flex;
height: auto;
width: 50%;
margin-right: 15px;
justify-content: flex-end;
& > div {
    display: flex;
    align-items: center;
    width: auto;
    height: auto;
    position: relative;
    & > input {
        border: 1px solid #dedede;
        border-radius: 5px;
        height: 28px;
        width: 100%;
        align-items: center;
}     
}
`;
const FilterIcon = styled.img`
position: absolute;
right: 10px;
top: 7px;
`;



const InnerFilterDiv = styled.div`
display: flex;
height: auto;
justify-content: flex-end;
margin-right: 15px;
`;

const FollowedContainer = styled.div`
display: flex; 
height: 32px;
cursor: pointer;
width: auto;
justify-content: center;
& > div {
    display: flex;
    height: auto;
    align-items: center;
    width: auto;
    justify-content: center;
    & > img {
    margin-left: 15px;
    width: 23px;
    }
    & > span {
    margin-left: 10px;
    font-size: 16px;
    }
}
`;

const FollowedArrow = styled.div`
display: flex;
width: auto;
margin-left: 10px;
justify-content: center;
`;

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


    const [
        wrapperRef, 
        dropdownOpen, 
        toggleDropdown, 
        // closeDropdown,
      ] = useDropdown();


    return (
        <ResumeWorkWrapper>
            <MainContentWrapper>
                <ResumeWorkHeader>
                    <div>
                    <h1>Resume your work</h1>
                    </div>
                    <InnerFilterDiv>
                    <HeaderFilterDiv>
                    <div>
                    <input placeholder="Filter by title.." type="text"></input>
                    <FilterIcon src="/assets/icons/search.svg" alt="img"></FilterIcon>
                    </div>
                    </HeaderFilterDiv>
                    <FollowedContainer ref={wrapperRef} onClick={toggleDropdown}>
                            <div>
                        <img src="/assets/icons/signal.svg" alt=""></img>
                        <span>Followed</span>
                        <FollowedArrow>
                        <img src="/assets/icons/arrow-down.svg" alt=""/>
                        </FollowedArrow>
                            </div>
                        {dropdownOpen && 
                        <>
                        <ResumeWorkMenu>  
                        </ResumeWorkMenu>
                        </>
            }
                        </FollowedContainer>
                    </InnerFilterDiv>

                </ResumeWorkHeader>
                <ResumeWorkDiv>
                    <WorkHeader>
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
                    <ResumeWorkDiv>
                    <WorkHeader>
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
                    <ResumeWorkDiv>
                    <WorkHeader>
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
                    <ResumeWorkDiv>
                    <WorkHeader>
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
                    <ResumeWorkDiv>
                    <WorkHeader>
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
    );
  };
  export default ResumeWork;