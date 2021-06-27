import { FC } from 'react';
import styled from 'styled-components'
import ProfileInfo from './ProfileInfo';
import {Colors} from '../../StyledHelpers/Colors';


const MainWrapper = styled.div`
display: flex;
flex-direction: column;
width: 90%;
height: auto;
margin-right: 20px;
margin-top: 20px;
margin-bottom: 50px;
`;
    
const ProfileWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
width: 45%;
margin: auto;
height: auto;
background-color: white;
border-style: solid;
border-width: 1px;
border-color: #dddddd;
background-color: ${Colors.niceblue};
`;

const ProfileNav = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
align-items: center;
margin-bottom: 10px;
justify-content: space-around;
`;

const ProfileNavWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: right;
width: 95%;
height: 95%;
`;


const ProfileNavButtons = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 10px;
height: auto;
justify-content: flex-end;
background-color: ${Colors.niceblue};
align-items: center;
text-align: center;
`;


const PanelInformations = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
border-bottom: solid;
border-width: 1px;
margin-top: 5px;
border-color: #dddddd;
`;

const Proposals = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
border-bottom: solid;
border-width: 1px;
border-color: #dddddd;
`;

const InternalRevievs = styled.div`
display: flex;
width: 100%;
height: auto;
border-bottom: solid;
border-width: 1px;
border-color: #dddddd;
`;

const AmountOfFees = styled.div`
display: flex;
width: 100%;
height: auto;
`;

const ESACDiv = styled.div`
display: flex;
flex-direction: column;
height: auto;
width: 100%;
border-top: solid;
border-bottom: solid;
border-width: 1px;
margin-top: 5px;
border-color: #dddddd;
`;

const Expertise = styled.div`
display: flex;
height: auto;
width: auto;
margin-left: 10px;
margin-top: 5px;
margin-bottom: 5px;
flex-direction: column;
& > h1 {
    font-size: 15px;
    color: gray;
    margin-bottom: 5px;
}
& div > span {
    background-color: #e2e2f7;
    cursor: pointer;
}
`

const Specialties = styled.div`
display: flex;
height: auto;
width: auto;
margin-left: 10px;
flex-direction: column;
& > h1 {
    font-size: 15px;
    color: gray;
    margin-bottom: 5px;
    margin-top: 5px;
}
& > div {
    display: flex;
}
& div > span {
    background-color: #e2e2f7;
    cursor: pointer;
}
& > div > p {
    background-color: #e2e2f7;
    margin-left: 15px;
    cursor: pointer;
}
`

const PanelDiv = styled.div`
display: flex;
height: auto;
width: auto;
margin-left: 10px;
flex-direction: column;
& > h1 {
    font-size: 18px;
    color: black;
    margin-bottom: 5px;
    margin-top: 5px;
}
& > div {
    display: flex;
    flex-direction: column;
}
& div > span {
    cursor: pointer;
    font-size: 14px;
}
& > div > p {
    cursor: pointer;
    margin-top: 5px;
    font-size: 14px;
}
& > div > div {
    display: flex;
    width: 90%;
    height: auto;
    background-color: #e2e2f7;
    align-items: center;
    cursor: pointer;
    margin-bottom: 5px;
    & > img {
        height: 15px;
        width: 15px;
        margin-left: 10px;
        margin-right: 10px;
        
    }
    & .profilowe {
        width: 30px;
        height: 30px;
        border-radius: 20px;
        margin-right: 10px;
        
    }
}
`;

const ProposalsDiv = styled.div`
display: flex;
flex-direction: column;
width: 95%;
height: auto;
margin-bottom: 5px;
& > h1 {
    font-size: 18px;
    margin-left: 10px;
    margin-top: 10px;
    color: black;
}
& > div {
    display: flex;
    margin-top: 20px;
    width: 90%;
    justify-content: space-evenly;
    

}
& > div > p {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 10px;

}
& > .divv {
    font-size: 15px;
}
`;

const AmountOfFeesDiv = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
margin-left: 10px;
margin-top: 10px;
& > h1 {
    font-size: 18px;
    margin-bottom: 10px;
}
& > div {
    display: flex;
    width: auto;
    justify-content: space-evenly;
    height: auto;
}
& > div > div {
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    text-align: center;
    & > h1 {
        font-size: 18px;
        color: black;
    }
    & > p {
        font-size: 15px;
        margin-top: 3px;
    }

}
`;


export const Profile: FC = () => {
    return (
        <MainWrapper>
            <ProfileWrapper>
                    <ProfileNav>
                        <ProfileNavWrapper>
                        <ProfileNavButtons>
                            <ProfileInfo></ProfileInfo>
                        </ProfileNavButtons>
                        <ESACDiv>
                            <Expertise>
                                <h1>Expertise</h1>
                                <div>
                                    <span>Mergers and acsquisition</span>
                                </div>
                            </Expertise>
                            <Specialties>
                                <h1>Specialties</h1>
                                <div>
                                    <span>Cross border operation</span>
                                    <p>Transaction over 500M€/$</p>
                                </div>
                            </Specialties>
                            <Specialties>
                                <h1>Amission</h1>
                                <div>
                                    <span>Paris bar association</span>
                                    <p>Tunisian bar association/</p>
                                </div>
                            </Specialties>
                            <Expertise>
                                <h1>Counties</h1>
                                <div>
                                    <span>Tunisia</span>
                                </div>
                            </Expertise>
                        </ESACDiv>
                        </ProfileNavWrapper>
                    </ProfileNav>
                    <PanelInformations>
                    <PanelDiv>
                                <h1>Panel Informations</h1>
                                <div>
                                    <span>Hourly fee</span>
                                    <p>610€/hour (Negociated)</p>
                                </div>
                    </PanelDiv>
                    <PanelDiv>
                                <h1>Terms & Conditions</h1>
                                <div>
                                    <span>Hourly fee</span>
                                    <p>Monthly 10k€ reainer - see with Jeanny Smith</p>
                                    <div>
                                        <img src="/assets/icons/contract.svg" alt=""></img>
                                        <p>Attachment_lorem-ipsum25425.jpg</p>
                                    </div>
                                </div>
                    </PanelDiv>
                    <PanelDiv>
                                <h1>Services $ projects</h1>
                                <div>
                                    <span>Corporate M&A and international acquisitions</span>
                                </div>
                    </PanelDiv>
                    <PanelDiv>
                                <h1>Internal correspondants</h1>
                                <div>
                                    <div>
                                    <img className="profilowe" src="/assets/Profilowe.png" alt="" />
                                        <p>Firstname LastName</p>
                                        <img src="./assets/icons/message.png" alt=""></img>
                                        <p>Message</p>
                                        <img src="./assets/icons/profile.png" alt=""></img>
                                        <p>Profile</p>

                                    </div>
                                </div>
                    </PanelDiv>
                    <PanelDiv>
                                <div>
                                    <div>
                                    <img className="profilowe" src="/assets/Profilowe.png" alt="" />
                                        <p>Firstname LastName</p>
                                        <img src="./assets/icons/message.png" alt=""></img>
                                        <p>Message</p>
                                        <img src="./assets/icons/profile.png" alt=""></img>
                                        <p>Profile</p>

                                    </div>
                                </div>
                    </PanelDiv>
                    </PanelInformations>
                    <Proposals>
                        <ProposalsDiv>
                        <h1>Proposals</h1>
                        <div>
                            <p>Name</p>
                            <p>Entity</p>
                            <p>Location</p>
                            <p>Expertise</p>
                            <p>Date</p>
                            <p>Firm</p>
                        </div>
                        <div className="divv">
                        <p>Operation ti..</p>
                            <p>Renault Co..</p>
                            <p>France</p>
                            <p>#Tax</p>
                            <p>20/01/2018</p>
                            <p>Racine</p>
                        </div>
                        <div className="divv">
                        <p>Op. Prometh..</p>
                            <p>Renault HQ</p>
                            <p>USA</p>
                            <p>#M&A</p>
                            <p>18/02/2019</p>
                            <p>Clifford chance</p>
                        </div>
                        <div className="divv">
                        <p>Op. Latandre</p>
                            <p>Renault Br</p>
                            <p>Italia</p>
                            <p>#Social</p>
                            <p>18/02/2019</p>
                            <p>SVZ</p>
                        </div>
                        </ProposalsDiv>
                    </Proposals>
                    <InternalRevievs>
                    <ProposalsDiv>
                        <h1>Internal Revievs</h1>
                        <div>
                            <p>Name</p>
                            <p>Entity</p>
                            <p>Location</p>
                            <p>Expertise</p>
                            <p>Date</p>
                        </div>
                        <div className="divv">
                        <p>Operation ti..</p>
                            <p>Renault Co..</p>
                            <p>France</p>
                            <p>#Tax</p>
                            <p>20/01/2018</p>
                        </div>
                        <div className="divv">
                        <p>Op. Prometh..</p>
                            <p>Renault HQ</p>
                            <p>USA</p>
                            <p>#M&A</p>
                            <p>18/02/2019</p>
                        </div>
                        <div className="divv">
                        <p>Op. Latandre</p>
                            <p>Renault Br</p>
                            <p>Italia</p>
                            <p>#Social</p>
                            <p>18/02/2019</p>
                        </div>
                        </ProposalsDiv>
                    </InternalRevievs>
                    <AmountOfFees>
                        <AmountOfFeesDiv>
                        <h1>Amount of Fees</h1>
                        <div>
                            <div>
                                <h1>Year</h1>
                                <p>2019</p>
                                <p>2018</p>
                                <p>2017</p>
                            </div>
                            <div>
                                <h1>Cost Center</h1>
                                <p>CS 153</p>
                                <p>CS 153</p>
                                <p>CS 47</p>
                                <p>CS 153</p>
                                <p>CS 32</p>
                            </div>
                            <div>
                                <h1>Total Amount</h1>
                                <p>3 500$</p>
                                <p>9 500$</p>
                                <p>10 500$</p>
                                <p>18 500$</p>
                                <p>15 500$</p>
                            </div>
                            <div>
                                <h1>Law firm</h1>
                                <p>Clifford chance</p>
                                <p>Linklaters</p>
                                <p>Linklaters</p>
                                <p>Linklaters</p>
                                <p>Linklaters</p>
                            </div>
                        </div>
                        </AmountOfFeesDiv>
                    </AmountOfFees>
            </ProfileWrapper>
        </MainWrapper>
    );
};

export default Profile;