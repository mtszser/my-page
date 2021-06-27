import { FC } from "react";
import styled from "styled-components";
import {Colors} from '../../StyledHelpers/Colors';



// const WorkspaceInfo = [
//   {
//     title: "Client Contract",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Supplier Contract",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Corporate",
//     img: "./assets/icons/entities2.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Group Norms",
//     img: "./assets/icons/agenda.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   {
//     title: "Real Estate Contracts",
//     img: "./assets/icons/contract.svg",
//     userimg: "",
//     users: "",
//     lastupdate: "Last update 2 days ago"
//   },
//   ];


const WorkspaceWrapper = styled.div`
display: flex;
flex-direction: column;
width: auto;
height: auto;
padding: 15px;
`;

const WorkspaceInnerWrapper = styled.div`
display: flex;
height: 200px;
width: 260px;
flex-direction: column;
background-color: ${Colors.niceblue};
box-shadow: 0px 2px 3px #999;
`;


const WorkspaceImg = styled.div`
background-image: url("./assets/photos/contractman.jpg");
background-size: auto;
display: flex;
background-repeat: no-repeat;
width: 100%;
height: 50%;
`;

const WorkspaceDiv = styled.div`
display: flex;
width: 100%;
height: 50%;
justify-content: center;
text-align: center;
& > div {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: auto;
}
`;

const WorskspaceDivContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: auto;
`;

const ContentHeader = styled.div`
display: flex;
height: auto;
width: 100%;
justify-content: center;
& > h1 {
  font-size: 18px;
  margin-left: 50px;
}
`;

const ContentText = styled.div`
display: flex;
position: relative;
height: auto;
width: auto;
flex-direction: column;
& > p {
  text-align: left;
  padding: 10px;
}
& > div {
  height: auto;
  width: auto;
  & > p {
    text-align: left;
    margin-left: 10px;
    font-size: 12px;
    color: grey;

  }
}
`;

const CardInnerImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 25px;
  top: 75px;
  height: 80px;
  width: 80px;
  border-radius: 5px;
  background-color: #fff;
  background-image: url("./assets/profile.png");
  background-repeat: no-repeat;
  img {
    width: 70px;
  }
`;



export const WorkspaceCard: FC = () => {
  return (
    <>
    <WorkspaceWrapper>
    <WorkspaceInnerWrapper>
      <WorkspaceImg/>
      <WorkspaceDiv>
        <WorskspaceDivContent>
          <ContentHeader>
            <CardInnerImg><img src='/assets/icons/contract.svg' alt="guy"></img></CardInnerImg>
            <h1> Client Contract</h1>
          </ContentHeader>
          <ContentText>
            <p>Contract * 150 users</p>
            <div>
              <p>Last update 2 days ago.</p>
            </div>
          </ContentText>


        </WorskspaceDivContent>
      </WorkspaceDiv>
    </WorkspaceInnerWrapper>
    </WorkspaceWrapper> 
    </>
  );
};
export default WorkspaceCard;